import { useNavigate } from "react-router-dom";

import { useForm, useApi } from "@hooks";
import { AllRouteConstants } from "@router";
import { emailValidator, emptyValidator, nameValidator, passwordValidator } from "@validators";
import { Services, IUserRespone, ISignupRequest, IEmailRequest } from "@services";
import { makeToast } from "@/libs";

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

  const sendVerificationEmailRequest = useApi<IUserRespone, IEmailRequest>((data: IEmailRequest) =>
    Services.Auth.verifyAccount(data)
  );
  

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    signupForm.resetFormErrors();

    signupApiRequest.reset();
    sendVerificationEmailRequest.reset();

    const valid = signupForm.validate();

    if (valid) {
      try {
        if (signupForm.form.referralCode === "") delete signupForm.form.referralCode;

        const user = await signupApiRequest.request(signupForm.form);


        if (user) {
          makeToast({ message: user.message, type: "success",id:"user-created" });

          await sendVerificationEmailRequest.request({
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
