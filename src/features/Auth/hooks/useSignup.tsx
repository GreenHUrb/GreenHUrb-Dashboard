import { useNavigate } from "react-router-dom";

import { makeToast } from "@/libs";
import { useApi, useForm } from "@hooks";
import { AllRouteConstants } from "@router";
import { ISignupRequest, IUserRespone, Services } from "@services";
import { emailValidator, emptyValidator, nameValidator, passwordValidator } from "@validators";

export const useSignup = () => {
  const navigate = useNavigate();

  const signupForm = useForm<ISignupRequest>(
    {
      emailAddress: "",
      password: "",
      fullName: "",
      referralCode: "",
      roleId: "6be3dfaf-256f-4a3e-885a-d956ba80fa8e",
      phoneNumber: ""
    },
    {
      emailAddress: emailValidator,
      password: passwordValidator,
      fullName: nameValidator,
      phoneNumber: emptyValidator
    }
  );

  const signupApiRequest = useApi<IUserRespone, ISignupRequest>((data: ISignupRequest) =>
    Services.Auth.signup(data)
  );

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    signupForm.resetFormErrors();

    signupApiRequest.reset();

    const valid = signupForm.validate();

    if (valid) {
      try {
        if (signupForm.form.referralCode === "") delete signupForm.form.referralCode;

        const user = await signupApiRequest.request(signupForm.form);

        if (user) {
          makeToast({ message: user.message, type: "success", id: "user-created" });

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
        }
      } catch (error) {}
    }
  };

  return {
    signupForm,
    handleSubmit,
    loading: signupApiRequest.loading
  };
};
