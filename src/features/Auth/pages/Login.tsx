// import Styles
import "../styles/auth_styles.scss";

// import Libraries
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

// import custom Hooks
import useLogin from "../hooks/useLogin";
import usePasswordType from "../hooks/usePasswordType";

// import Icons
import visibleIcon from "../../../assets/icons/visible.svg";
import notvisibleIcon from "../../../assets/icons/not-visible.svg";
import LogoIcon from "../../../assets/icons/logo.svg";
import GoogleIcon from "../../../assets/icons/google.svg";
import FacebookIcon from "../../../assets/icons/facebook.svg";

// import custom Components
import FormError from "../../../components/form/formError/FormError";
import Button from "../../../components/Button/Button";
import Input from "../../../components/form/Input/Input";
import { AllRouteConstants } from "../../../router/RouteConstants";
import SocialMediaAuthButton from "../components/SocialMediaAuthButton/SocialMediaAuthButton";
import Checkbox from "../../../components/form/Checkbox/Checkbox";

// import Interfaces
import { ILogin } from "../../../interfaces/IApiRequests";

export const Login = () => {
  const { handleSubmit, loginForm, loading, error } = useLogin();
  const { passwordType, togglePassword } = usePasswordType();
  const navigate = useNavigate();

  const formChange = (key: keyof ILogin, value: any) => {
    loginForm.onChange(key, value);
    return;
  };

  return (
    <div className="animate__animated animate__fadeIn auth-login">
      <div>
        {/* <div className="auth_logo">
          <img src={LogoIcon} alt="logo" />
        </div> */}
        <div className="auth-header">
          <button className="auth-back-btn" onClick={()=> navigate(-1)}>
            <BiArrowBack />
          </button>
          <h1 className="auth-title">Welcome back</h1>
        </div>

        {/* <h2 className="auth-subtitle">
          Access your dashboard by inputting your login details
        </h2> */}

        {/* <p className="auth-top_text">
          Sell your farm produce at the most convenient store
          <Button
            label="Sign Up"
            variant="text"
            onClick={() => navigate(AllRouteConstants.auth.signup)}
          />
        </p> */}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <Input
              id="email"
              label="Email address"
              error={loginForm.formErrors.email}
              animation="animate__animated animate__fadeInLeft"
              inputProps={{
                placeholder: "E.g John Doe",
                value: loginForm.form.email,
                onChange: e => formChange("email", e.target.value),
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
              animation="animate__animated animate__fadeInRight"
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
          <FormError error={error?.message} />
        </form>

        <div className="auth-or_container">
          <div className="auth-or_line"></div>
          <span className="auth-or_text">or sign in with</span>
          <div className="auth-or_line" />
        </div>

        <div className="auth-footer">
          <SocialMediaAuthButton image={GoogleIcon} />
          <SocialMediaAuthButton image={FacebookIcon} />
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
