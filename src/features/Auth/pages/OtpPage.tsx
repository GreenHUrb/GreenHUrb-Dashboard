import { BiArrowBack } from "react-icons/bi";
import AnimateHeight from "react-animate-height";

import { Button, OtpInput } from "@components";
import "../styles/auth_otp_styles.scss";
import { useOtp } from "../hooks";
import { AuthModal } from "../components";

export const OtpPage = () => {
  const { navigate, seconds, form, disabled, userDetails, handleChangeOtpSubmitted, otpSubmitted } =
    useOtp();

  const { handleSubmit, onChangeOtp, otp, handleResendOtp } = form;

  return (
    <div className="auth_otp">
      {otpSubmitted && (
        <AuthModal
          header="Account Verification Successful!"
          onClose={handleChangeOtpSubmitted}
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
          <p>
            A verification code was sent to your email {userDetails?.emailAddress} and your phone
            number {userDetails?.phoneNumber}, Kindly input the code below
          </p>
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
            />
          </AnimateHeight>

          <Button label="Verify" disable={otp.length !== 4} variant="contained" fullWidth />
        </form>

        <div>
          <p className="auth_otp_bottom_text">
            I dont have access to the phone number, send code to my{" "}
            <Button label="Email address" variant="text" />
          </p>
        </div>
      </div>
    </div>
  );
};
