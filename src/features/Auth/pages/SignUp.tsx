// import Styles
import "../styles/auth_styles.scss";

// import Libraries
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

// import custom Hooks
import { useLogin, usePasswordType, useSignup } from "../hooks";

// import Icons
import GoogleIcon from "@icons/google.svg";
import visibleIcon from "@icons/visible.svg";
import FacebookIcon from "@icons/facebook.svg";
import notvisibleIcon from "@icons/not-visible.svg";

// import custom Components
import { Button, PhoneInputField } from "@components";
import { Input } from "../../../components/form/Input";
import { AllRouteConstants } from "@router";
import { SocialMediaAuthButton, AuthModal } from "../components";
import { ISignupRequest } from "@/services";

export const SignUp = () => {
  const navigate = useNavigate();

  const { passwordType, togglePassword } = usePasswordType();

  const { handleSubmit, loading, signupForm } = useSignup();

  const formChange = (key: keyof ISignupRequest, value: any) => {
    signupForm.onChange(key, value);
    return;
  };

  return (
    <div className="animate__animated animate__fadeIn auth-login">
      <div>
        <div className="auth-header">
         
          <h1 className="auth-title">Welcome to GreenHUrb</h1>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <Input
              id="fullName"
              label="Full Name"
              error={signupForm.formErrors.fullName}
              // animation="animate__animated animate__fadeInLeft"
              inputProps={{
                placeholder: "John Doe",
                value: signupForm.form.fullName,
                onChange: e => formChange("fullName", e.target.value),
                required: true
              }}
            />
          </div>
          <div className="auth-field">
            <Input
              id="email"
              label="Email address"
              error={signupForm.formErrors.emailAddress}
              // animation="animate__animated animate__fadeInLeft"
              inputProps={{
                placeholder: "johndoe@gmail.com",
                value: signupForm.form.emailAddress,
                onChange: e => formChange("emailAddress", e.target.value),
                required: true,
                type: "email"
              }}
            />
          </div>
          <div className="auth-field">
            <PhoneInputField
              id="phone"
              label="Phone number"
              error={signupForm.formErrors.phoneNumber}
              value={signupForm.form.phoneNumber}
              onChange={(phoneNumber: string) => formChange("phoneNumber", phoneNumber)}
              // inputProps={{
              //   placeholder: "+234 80 8809 2667",
              //   required: true,
              //   type: "number"
              // }}
            />
          </div>

          <div className="auth-field">
            <Input
              id="referral"
              label="Referral Code (optional)"
              error={signupForm.formErrors.referralCode ?? null}
              // animation="animate__animated animate__fadeInLeft"
              inputProps={{
                placeholder: "JD123456",
                value: signupForm.form.referralCode,
                onChange: e => formChange("referralCode", e.target.value)
              }}
            />
          </div>

          <div className="auth-field">
            <Input
              id="password"
              label="Password"
              error={signupForm.formErrors.password}
              // animation="animate__animated animate__fadeInRight"
              rightIcon={
                <div style={{ marginLeft: "10px", cursor: "pointer" }} onClick={togglePassword}>
                  {passwordType === "password" ? (
                    <img src={visibleIcon} style={{ width: "20px" }} />
                  ) : (
                    <img src={notvisibleIcon} style={{ width: "20px" }} />
                  )}
                </div>
              }
              inputProps={{
                type: passwordType,
                placeholder: "Password",
                value: signupForm.form.password,
                onChange: e => formChange("password", e.target.value),
                required: true
              }}
            />
          </div>

          <Button label="Continue" variant="contained" loading={loading} fullWidth />
        </form>

        <div className="auth-or_container">
          <div className="auth-or_line"></div>
          <span className="auth-or_text">or sign up with</span>
          <div className="auth-or_line" />
        </div>

        <div className="auth-footer">
          <SocialMediaAuthButton image={GoogleIcon} />
          <SocialMediaAuthButton image={FacebookIcon} />
        </div>

        <p className="auth-top_text">
          Already have an account with GreeenHUrb?
          <Button
            label="Log in"
            variant="text"
            onClick={() => navigate(AllRouteConstants.auth.login)}
          />
        </p>
      </div>
    </div>
  );
};
