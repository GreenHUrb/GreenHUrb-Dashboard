// import Styles
import "../styles/auth_styles.scss";

// import Libraries
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

// import custom Hooks
import { useGoogleLogin, useLogin, usePasswordType } from "../hooks";

// import Icons
import GoogleIcon from "@icons/google.svg";
import visibleIcon from "@icons/visible.svg";
import FacebookIcon from "@icons/facebook.svg";
import notvisibleIcon from "@icons/not-visible.svg";

// import custom Components
import { ILoginRequest } from "@/services";
import { AllRouteConstants } from "@router";
import { Button, Checkbox, Input } from "@components";
import { SocialMediaAuthButton } from "../components";

// import Interfaces

export const Login = () => {
  const navigate = useNavigate();

  const { handleSubmit, loginForm, loading } = useLogin();

  const { googleLoginUrl, loggingIn } = useGoogleLogin();

  const { passwordType, togglePassword } = usePasswordType();

  const formChange = (key: keyof ILoginRequest, value: any) => {
    loginForm.onChange(key, value);
    return;
  };

  return (
    <div className="animate__animated animate__fadeIn auth-login">
      <div>
        <div className="auth-header">
          <button className="auth-back-btn" onClick={() => navigate(-1)}>
            <BiArrowBack />
          </button>
          <h1 className="auth-title">Welcome back</h1>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <Input
              id="email"
              label="Email address"
              error={loginForm.formErrors.emailAddress}
              inputProps={{
                placeholder: "E.g John Doe",
                value: loginForm.form.emailAddress,
                onChange: e => formChange("emailAddress", e.target.value),
                required: true,
                type: "email"
              }}
            />
          </div>

          <div className="auth-field">
            <Input
              id="password"
              label="Password"
              error={loginForm.formErrors.password}
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
                value: loginForm.form.password,
                onChange: e => formChange("password", e.target.value),
                required: true
              }}
            />
          </div>

          <div className="auth_forgot_password_and_remember_me">
            <Checkbox label={<span className="remember_me_header">Remember Me</span>} />
            <Button label="Forgot Password?" variant="text" />
          </div>

          <Button label="Log in" variant="contained" loading={loading} fullWidth />
        </form>

        <div className="auth-or_container">
          <div className="auth-or_line"></div>
          <span className="auth-or_text">or sign in with</span>
          <div className="auth-or_line" />
        </div>

        <div className="auth-footer">
          <SocialMediaAuthButton loading={loggingIn} link={googleLoginUrl} image={GoogleIcon} />
          <SocialMediaAuthButton link={googleLoginUrl} image={FacebookIcon} />
        </div>

        <p className="auth-top_text">
          Do you have an account
          <Button
            label="Sign Up"
            variant="text"
            onClick={() => navigate(AllRouteConstants.auth.signup)}
          />
        </p>
      </div>
    </div>
  );
};
