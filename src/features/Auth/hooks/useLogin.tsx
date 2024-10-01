import { makeToast } from "@/libs";
import { useApi, useAuthActions, useForm } from "@hooks";
import { AllRouteConstants } from "@router";
import { ILoginRequest, IUserRespone, Services } from "@services";
import { emailValidator, emptyValidator } from "@validators";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();

  const loginForm = useForm<ILoginRequest>(
    { emailAddress: "", password: "" },
    { emailAddress: emailValidator, password: emptyValidator }
  );

  const { login } = useAuthActions();

  const loginApiRequest = useApi<IUserRespone, ILoginRequest>((data: ILoginRequest) =>
    Services.Auth.login(data)
  );

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    loginForm.resetFormErrors();
    loginApiRequest.reset();

    const valid = loginForm.validate();

    if (!valid) return;

    const user = await loginApiRequest.request(loginForm.form);

    if (!user) return;

    if (user.data.emailAddress && !user.data.user.emailVerified) {
      navigate(AllRouteConstants.auth.notUseLayout.otp, {
        state: {
          userDetails: {
            emailAddress: user.data.emailAddress,
            phoneNumber: undefined
          }
        },

        replace: true
      });

      return makeToast({
        message: "User Email is not Verfied. Please Check your Email for further information",
        type: "info",
        id: "verified-mail"
      });
    }

    if (user.data.phoneNumber && !user.data.user.phoneNumberVerified) {
      navigate(AllRouteConstants.auth.notUseLayout.otp, {
        state: {
          userDetails: {
            emailAddress: undefined,
            phoneNumber: user.data.phoneNumber
          }
        },

        replace: true
      });

      return makeToast({
        message: "User Phone is not Verfied. Please Check your SMS for further information",
        type: "info",
        id: "verified-mail"
      });
    }

    navigate(AllRouteConstants.main.index);

    return login(user.data);
  };

  return {
    loginForm,
    handleSubmit,
    loading: loginApiRequest.loading
  };
};
