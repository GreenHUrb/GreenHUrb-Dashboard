import { useNavigate } from "react-router-dom";

import { useForm, useApi, useAuthActions } from "@hooks";
import { AllRouteConstants } from "@router";
import { emailValidator, emptyValidator } from "@validators";
import { Services, ILoginRequest, IUserRespone, IEmailRequest } from "@services";

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

  const sendOtpRequest = useApi<{ message: string }, IEmailRequest>((data: IEmailRequest) =>
    Services.Auth.verifyAccount(data)
  );

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    loginForm.resetFormErrors();
    loginApiRequest.reset();

    const valid = loginForm.validate();

    if (valid) {
      try {
        const user = await loginApiRequest.request(loginForm.form);

        if (user) {
          if (user.data.isVerified) {
            navigate(AllRouteConstants.main.index);
            return login(user.data);
          } else {
            await sendOtpRequest.request({
              emailAddress: user.data.emailAddress
            });

            navigate(AllRouteConstants.auth.notUseLayout.otp, {
              state: {
                userDetails: {
                  id: user.data.id,
                  emailAddress: user.data.emailAddress,
                  phoneNumber: user.data.phoneNumber
                }
              },
              replace: true
            });
            return;
          }
        }
      } catch (error) {}
    }
  };

  return {
    loginForm,
    handleSubmit,
    loading: loginApiRequest.loading || sendOtpRequest.loading
  };
};
