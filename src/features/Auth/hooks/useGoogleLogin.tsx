import { useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm, useApi, useAuthActions } from "@hooks";
import { AllRouteConstants } from "@router";
import { Services, IUserRespone, IGoogleAuth, IEmailRequest } from "@services";
import { config } from "@/config";
import { useEffect, useState } from "react";
import { makeToast } from "@/libs";

export const useGoogleLogin = () => {
  // Use React Router's navigate function to handle navigation
  const navigate = useNavigate();

  // Destructure the login function from the useAuthActions hook
  const { login } = useAuthActions();

  const [loggingIn, setLoggingIn] = useState(false);

  // Create a string containing OAuth parameters for Google login
  const stringifiedParams = queryString.stringify({
    client_id: config?.vite_oauth_client_id,
    redirect_uri: "http://localhost:4000/auth/signin",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile"
    ].join(" "),
    response_type: "code",
    access_type: "offline",
    prompt: "consent"
  });

  // Create the Google login URL using the constructed parameters
  const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;

  // Create an API request hook for handling Google authentication
  const googleAuthApiRequest = useApi<IUserRespone, IGoogleAuth>((data: IGoogleAuth) =>
    Services.Auth.googleAuth(data)
  );

  // Create an API request hook for sending OTP requests
  const sendOtpRequest = useApi<{ message: string }, IEmailRequest>((data: IEmailRequest) =>
    Services.Auth.verifyAccount(data)
  );

  const getGoogleCode = () => {
    // Parse URL parameters
    const urlParams = queryString.parse(window.location.search);

    // If there is an error in the URL parameters, display a toast message
    if (urlParams.error) {
      makeToast({
        id: "oauth-error",
        message: `An error while Logging In: ${urlParams.error}`,
        type: "error"
      });

      return navigate(AllRouteConstants.auth.login);
    }

    // If the authorization code is not present, exit the function
    if (!urlParams.code) return;

    return urlParams.code;
  };

  // Define a handler for signing in with Google
  const handleSigninWithGoogle = async (code: string) => {
    setLoggingIn(true);
    // Make a request to authenticate with Google using the obtained code
    const user = await googleAuthApiRequest.request({
      code,
      roleId: "6be3dfaf-256f-4a3e-885a-d956ba80fa8e"
    });

    if (!user) {
      makeToast({
        id: "oauth-error",
        message: `An error while Logging In: Please Try Again`,
        type: "error"
      });

      setLoggingIn(false);

      return navigate(AllRouteConstants.auth.login);
    }

    makeToast({
      id: "oauth-success",
      message: `Logged In SuccessFully`,
      type: "success"
    });

    setLoggingIn(false);

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

  // Use the useEffect hook to handle Google sign-in on component mount
  useEffect(() => {
    const googleCode = getGoogleCode();

    if (googleCode) {
      handleSigninWithGoogle(googleCode as string);
    }
  }, []);

  return {
    googleLoginUrl,
    loggingIn
  };
};
