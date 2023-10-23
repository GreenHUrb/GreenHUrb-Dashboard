import { useLocation, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { useApi } from "@/hooks";
import { IEmailRequest, IUserRespone, IValidateVerifyAccountRequest, Services } from "@/services";
import { AllRouteConstants } from "@/router";
import { makeToast } from "@/libs";

interface IUserDetails {
  id: string;
  emailAddress: string;
  phoneNumber: string;
}

export const useOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [resendButtonDetails, setResendButtonDetails] = useState({
    seconds: 59,
    disabled: true
  });
  const [otpSubmitted, setOtpSubmitted] = useState(false);

  const onChangeOtp = (value: string) => setOtp(value.trim());

  const userDetails: IUserDetails = location?.state?.userDetails;

  const handleChangeOtpSubmitted = () => {
    setOtpSubmitted(false);
  };

  const handleResendOtp = async () => {
    if (resendButtonDetails.disabled) return;

    const result = await sendOtpRequest.request({
      emailAddress: userDetails.emailAddress
    });

    makeToast({ message: result?.message!, type: "success" });

    if (result) {
      setResendButtonDetails({
        seconds: 59,
        disabled: true
      });
    }
  };

  useEffect(() => {
    const { disabled, seconds } = resendButtonDetails;

    if (seconds <= 0) {
      return setResendButtonDetails({
        ...resendButtonDetails,
        disabled: false
      });
    } else if (!disabled) {
      return setResendButtonDetails({
        ...resendButtonDetails,
        disabled: true
      });
    }

    if (resendButtonDetails.disabled) {
      const interval = setInterval(() => {
        setResendButtonDetails({
          ...resendButtonDetails,
          seconds: seconds === 0 ? 59 : seconds - 1
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [resendButtonDetails.seconds]);

  useEffect(() => {
    !userDetails && navigate(AllRouteConstants.auth.login);
  }, []);

  const sendOtpRequest = useApi<{ message: string }, IEmailRequest>((data: IEmailRequest) =>
    Services.Auth.verifyAccount(data)
  );

  const validateOtpRequest = useApi<IUserRespone, IValidateVerifyAccountRequest>(
    (data: IValidateVerifyAccountRequest) => Services.Auth.validateVerifyAccount(data)
  );

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    validateOtpRequest.reset();

    try {
      const valid = await validateOtpRequest.request({
        otp,
        emailAddress: userDetails.emailAddress
      });

      if (valid) {
        makeToast({ message: valid?.message, type: "success" });
      }

      navigate(AllRouteConstants.auth.notUseLayout.tAndC, {
        state: {
          userDetails
        },
        replace: true
      });
    } catch (error) {}
  };

  return {
    navigate,
    seconds: resendButtonDetails.seconds,
    disabled: resendButtonDetails.disabled,
    userDetails,
    handleChangeOtpSubmitted,
    otpSubmitted,
    form: {
      otp,
      handleSubmit,
      onChangeOtp,
      handleResendOtp
    }
  };
};
