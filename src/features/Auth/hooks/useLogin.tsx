// Import necessary dependencies and modules
import { useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm, useApi, useAuthActions } from "@hooks";
import { AllRouteConstants } from "@router";
import { emailValidator, emptyValidator } from "@validators";
import { Services, ILoginRequest, IUserRespone, IEmailRequest } from "@services";
// Define a custom hook for handling login functionality
export const useLogin = () => {
  // Use React Router's navigate function to handle navigation
  const navigate = useNavigate();

  // Initialize a form using the useForm hook, specifying the shape of the form data and validators
  const loginForm = useForm<ILoginRequest>(
    { emailAddress: "", password: "" },
    { emailAddress: emailValidator, password: emptyValidator }
  );

  // Destructure the login function from the useAuthActions hook
  const { login } = useAuthActions();

  // Create an API request hook for handling login requests
  const loginApiRequest = useApi<IUserRespone, ILoginRequest>((data: ILoginRequest) =>
    Services.Auth.login(data)
  );

  // Create an API request hook for sending OTP requests
  const sendOtpRequest = useApi<{ message: string }, IEmailRequest>((data: IEmailRequest) =>
    Services.Auth.verifyAccount(data)
  );

  // Define the form submission handler
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    // Reset form errors and API request states
    loginForm.resetFormErrors();
    loginApiRequest.reset();

    // Validate the form data
    const valid = loginForm.validate();

    // If form is not valid, exit the function
    if (!valid) return;

    // Make a login request using the API request hook
    const user = await loginApiRequest.request(loginForm.form);

    // If user data is not present, exit the function
    if (!user) return;

    // If the user is verified, navigate to the main page and trigger the login action
    if (user.data.isVerified) {
      navigate(AllRouteConstants.main.index);
      return login(user.data);
    }

    // If the user is not verified, send an OTP request and navigate to the OTP page
    if (!user.data.isVerified) {
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
  };

  // Return the necessary values and functions for the login functionality
  return {
    loginForm,
    handleSubmit,
    loading: loginApiRequest.loading || sendOtpRequest.loading
  };
};
