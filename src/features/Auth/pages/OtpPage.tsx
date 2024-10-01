import AnimateHeight from "react-animate-height";
import { BiArrowBack } from "react-icons/bi";

import { AllRouteConstants } from "@/router";
import { Button, OtpInput } from "@components";
import { useEffect, useState } from "react";
import { AuthModal } from "../components";
import { useOtp } from "../hooks";
import "../styles/auth_otp_styles.scss";

export const OtpPage = () => {
  const [platform, setPlatform] = useState<"email" | "phone">("phone");

  const {
    navigate,
    seconds,
    userDetails,
    form,
    disabled,
    handleCloseOtpSuccessModal,
    showOtpSuccessModal,
    submitting,
    resending
  } = useOtp(platform);

  const { handleSubmit, onChangeOtp, otp, handleResendOtp } = form;

  useEffect(() => {
    if (!userDetails) return navigate(AllRouteConstants.auth.login);

    if (userDetails.emailAddress) return setPlatform("email");

    if (userDetails.phoneNumber) return setPlatform("phone");

    navigate(AllRouteConstants.auth.login);
  }, [userDetails]);

  return (
    <div className="auth_otp">
      {showOtpSuccessModal && (
        <AuthModal
          header="Account Verification Successful!"
          onClose={handleCloseOtpSuccessModal}
          buttonText="Continue"
          text={
            <p className="auth_modal_text">
              <span style={{ color: "#131418" }}>Congratulations! </span>Account verified
              Successfully!
            </p>
          }
        />
      )}

      <div className="auth_otp_container">
        <div className="auth_otp_top">
          <button className="auth_otp_back-btn" onClick={() => navigate(-1)}>
            <BiArrowBack />
          </button>
          <h1>OTP</h1>
          {platform === "email" && (
            <p>
              A verification code was sent to your email {userDetails?.emailAddress}, Kindly input
              the code below
            </p>
          )}

          {platform === "phone" && (
            <p>
              A verification code was sent to your phone number {userDetails?.phoneNumber}, Kindly
              input the code below
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <OtpInput value={otp} valueLength={4} onChange={onChangeOtp} />

          <AnimateHeight duration={300} height={seconds <= 0 ? 0 : "auto"}>
            <p className="auth_otp_resend-text">
              Resend code in 00:{seconds < 10 ? "0" + seconds : seconds}
            </p>
          </AnimateHeight>

          <AnimateHeight duration={300} height={disabled ? 0 : "auto"}>
            <Button
              label="Resend"
              disable={disabled}
              variant="outlined"
              type="button"
              fullWidth
              onClick={handleResendOtp}
              loading={resending}
            />
          </AnimateHeight>

          <Button
            label="Verify"
            disable={otp.length !== 4}
            variant="contained"
            fullWidth
            loading={submitting}
          />
        </form>

        <div>
          {platform === "email" && userDetails.phoneNumber && (
            <p className="auth_otp_bottom_text">
              I dont have access to my Email Address, send code to my
              <Button label="Phone Number" variant="text" onClick={() => setPlatform("phone")} />
            </p>
          )}

          {platform === "phone" && userDetails.emailAddress && (
            <p className="auth_otp_bottom_text">
              I dont have access to my phone number, send code to my
              <Button label="Email address" variant="text" onClick={() => setPlatform("email")} />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
