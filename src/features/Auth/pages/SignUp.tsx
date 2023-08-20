// import Styles
import "../styles/auth_styles.scss";

// import Libraries
import { useNavigate } from "react-router-dom";

// import custom Hooks
import useLogin from "../hooks/useLogin";
import usePasswordType from "../hooks/usePasswordType";

// import Icons
import visibleIcon from "../../../assets/icons/visible.svg";
import notvisibleIcon from "../../../assets/icons/not-visible.svg";
import LogoIcon from '../../../assets/icons/logo.svg'
import GoogleIcon from '../../../assets/icons/google.svg'
import FacebookIcon from '../../../assets/icons/facebook.svg'

// import custom Components
import FormError from "../../../components/form/formError/FormError";
import Button from "../../../components/Button/Button";
import Input from "../../../components/form/Input/Input";
import { AllRouteConstants } from "../../../router/RouteConstants";
import SocialMediaAuthButton from "../components/SocialMediaAuthButton/SocialMediaAuthButton";
import Checkbox from "../../../components/form/Checkbox/Checkbox";

// import Interfaces
import { ILogin } from "../../../interfaces/IApiRequests";

export const SignUp = () => {
    const { handleSubmit, loginForm, loading, error } = useLogin()
    const { passwordType, togglePassword } = usePasswordType()
    const navigate = useNavigate()

    const formChange = (key: keyof ILogin, value: any) => {
        loginForm.onChange(key, value);
        return;
    };

    return (
        <div className="animate__animated animate__fadeIn">
            <div>

                <div className="auth_logo">
                    <img src={LogoIcon} alt="logo" />
                </div>

                <h1 className="auth-title">
                    Welcome to GreenHUrb
                </h1>

                <h2 className="auth-subtitle">
                    Grow Your Agricultural Business Online! Join Our E-commerce <br /> Platform and Start Selling Today!
                </h2>

                <p className="auth-top_text">
                    Already have an account with GreeenHUrb?
                    <Button
                        label="Log in"
                        variant="text"
                        onClick={() => navigate(AllRouteConstants.auth.login)}
                    />
                </p>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="auth-field">
                        <Input
                            id="fullName"
                            label="Full Name"
                            error={loginForm.formErrors.email}
                            animation="animate__animated animate__fadeInLeft"
                            inputProps={{
                                placeholder: "John Doe",
                                value: loginForm.form.email,
                                onChange: (e) => formChange("email", e.target.value),
                                required: true,
                            }}
                        />
                    </div>
                    <div className="auth-field">
                        <Input
                            id="email"
                            label="Email address"
                            error={loginForm.formErrors.email}
                            animation="animate__animated animate__fadeInLeft"
                            inputProps={{
                                placeholder: "johndoe@gmail.com",
                                value: loginForm.form.email,
                                onChange: (e) => formChange("email", e.target.value),
                                required: true,
                                type: 'email'
                            }}
                        />
                    </div>
                    <div className="auth-field">
                        <Input
                            id="phone"
                            label="Phone number"
                            error={loginForm.formErrors.email}
                            animation="animate__animated animate__fadeInLeft"
                            inputProps={{
                                placeholder: "+234 80 8809 2667",
                                value: loginForm.form.email,
                                onChange: (e) => formChange("email", e.target.value),
                                required: true,
                                type: 'number'
                            }}
                        />
                    </div>

                    <div className="auth-field">
                        <Input
                            id="referral"
                            label="Referral Code (optional)"
                            error={loginForm.formErrors.email}
                            animation="animate__animated animate__fadeInLeft"
                            inputProps={{
                                placeholder: "JD123456",
                                value: loginForm.form.email,
                                onChange: (e) => formChange("email", e.target.value),
                                required: true,
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
                                <div
                                    style={{ marginLeft: "10px", cursor: "pointer" }}
                                    onClick={togglePassword}
                                >
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
                                onChange: (e) => formChange("password", e.target.value),
                                required: true,
                            }}
                        />
                    </div>

                    <div className="auth-field">
                        <Input
                            id="confirmPassword"
                            label="Confirm Password"
                            error={loginForm.formErrors.password}
                            animation="animate__animated animate__fadeInRight"
                            rightIcon={
                                <div
                                    style={{ marginLeft: "10px", cursor: "pointer" }}
                                    onClick={togglePassword}
                                >
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
                                onChange: (e) => formChange("password", e.target.value),
                                required: true,
                            }}
                        />
                    </div>

                    <div className="auth_forgot_password_and_remember_me">
                        <Checkbox
                            label={
                                <span className="remember_me_header">
                                    Remember Me
                                </span>
                            }
                        />
                        <Button
                            label="Forgot Password?"
                            variant="text"
                        />
                    </div>

                    <Button
                        label="Sign up"
                        variant="contained"
                        loading={loading}
                        fullWidth
                    />
                    <FormError error={error?.message} />
                </form>


                <div className="auth-or_container">
                    <div className="auth-or_line"></div>
                    <span className="auth-or_text">or</span>
                    <div className="auth-or_line" />
                </div>


                <div className="auth-footer">
                    <SocialMediaAuthButton image={GoogleIcon} label="Sign In With Google" />
                    <SocialMediaAuthButton image={FacebookIcon} label="Sign In With Facebook" />
                </div>
            </div>

        </div>
    );
};
