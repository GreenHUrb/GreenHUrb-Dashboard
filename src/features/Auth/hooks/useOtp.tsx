import { useLocation, useNavigate } from "react-router-dom";

import { useApi } from "@/hooks";
import { makeToast } from "@/libs";
import { AllRouteConstants } from "@/router";
import { AuthPlatform, IUserRespone, IVerifyAccountRequest, Services } from "@/services";
import { useEffect, useState } from "react";

interface IUserDetails {
  id: string;
  emailAddress: string;
  phoneNumber: string;
}

export const useOtp = (platform: "email" | "phone") => {
  const location = useLocation();

  const userDetails: IUserDetails = location?.state?.userDetails;

  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  const [resendButtonDetails, setResendButtonDetails] = useState({
    seconds: 59,
    disabled: true
  });

  // API SERVICES
  const sendOtpRequest = useApi<{ message: string }, AuthPlatform>((data: AuthPlatform) =>
    Services.Auth.resendVerificationOtp(data)
  );

  const validateOtpRequest = useApi<IUserRespone, IVerifyAccountRequest>(
    (data: IVerifyAccountRequest) => Services.Auth.verifyAccount(data)
  );

  const [showOtpSuccessModal, setShowOtpSuccessModal] = useState(false);

  const handleCloseOtpSuccessModal = () => {
    setShowOtpSuccessModal(false);

    navigate(AllRouteConstants.auth.notUseLayout.tAndC, {
      state: {
        userDetails: null
      },
      replace: true
    });
  };

  const onChangeOtp = (value: string) => setOtp(value.trim());

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    validateOtpRequest.reset();

    try {
      const payload: IVerifyAccountRequest = {
        otp,
        ...(platform === "email"
          ? { platform: "email", emailAddress: userDetails.emailAddress }
          : { platform: "phone", phoneNumber: userDetails.phoneNumber })
      };

      const valid = await validateOtpRequest.request(payload);

      if (valid) {
        makeToast({ message: "Account Verified Successfully", type: "success" });

        setShowOtpSuccessModal(true);
      }
    } catch (error) {}
  };

  // Resend OTP
  const handleResendOtp = async () => {
    if (resendButtonDetails.disabled) return;

    const payload: AuthPlatform = {
      ...(platform === "email"
        ? { platform: "email", emailAddress: userDetails.emailAddress }
        : { platform: "phone", phoneNumber: userDetails.phoneNumber })
    };

    const result = await sendOtpRequest.request(payload);

    if (result) {
      makeToast({ message: "OTP Has been resent Successfully!", type: "success" });

      setResendButtonDetails({
        seconds: 59,
        disabled: true
      });
    }
  };

  // Resend Counter Logic
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

  return {
    navigate,
    seconds: resendButtonDetails.seconds,
    disabled: resendButtonDetails.disabled,
    userDetails,
    submitting: validateOtpRequest.loading,
    resending: sendOtpRequest.loading,
    handleCloseOtpSuccessModal,
    showOtpSuccessModal,
    form: {
      otp,
      handleSubmit,
      onChangeOtp,
      handleResendOtp
    }
  };
};
