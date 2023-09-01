import React from "react";

import SettingsBackButton from "../components/SettingsBackButton";
import { AllRouteConstants } from "../../../router/RouteConstants";
import Input from "../../../components/form/Input/Input";
import usePasswordType from "../../Auth/hooks/usePasswordType";
import visibleIcon from "../../../assets/icons/visible.svg";
import notvisibleIcon from "../../../assets/icons/not-visible.svg";
import useLogin from "../../Auth/hooks/useLogin";
import { ILogin } from "../../../interfaces/IApiRequests";
import Button from "../../../components/Button/Button";
import useChangePassword, { IChangePassword } from "../hooks/useChangePassword";

interface PasswordSettingsProps { }

export const PasswordSettings: React.FC<PasswordSettingsProps> = ({ }) => {
  const { changePasswordForm, handleSubmit } = useChangePassword();
  const { passwordType, togglePassword } = usePasswordType();

  const formChange = (key: keyof IChangePassword, value: any) => {
    changePasswordForm.onChange(key, value);
    return;
  };

  return (
    <main className="password_settings animate__animated animate__fadeIn">
      <SettingsBackButton name="Back to settings" route={AllRouteConstants.settings.index} />
      <div>
        <div style={{ gridColumn: "span 2" }}>
          <h3>Change Password</h3>
          <p className="password_settings_title">To change your password, you need to put your current password.</p>
        </div>

        <form className="password_settings_form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <Input
              id="password"
              label="Password"
              error={changePasswordForm.formErrors.oldPassword}
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
                value: changePasswordForm.form.oldPassword,
                onChange: e => formChange("oldPassword", e.target.value),
                required: true
              }}
            />
          </div>
          <div className="auth-field">
            <Input
              id="new password"
              label="New password"
              error={changePasswordForm.formErrors.newPassword}
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
                value: changePasswordForm.form.newPassword,
                onChange: e => formChange("newPassword", e.target.value),
                required: true
              }}
            />
          </div>
          <div className="auth-field">
            <Input
              id="confirm password"
              label="Confirm new password"
              error={changePasswordForm.formErrors.confirmPassword || changePasswordForm.form.newPassword !== changePasswordForm.form.confirmPassword ? ' is not the Same' : null}
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
                value: changePasswordForm.form.confirmPassword,
                onChange: e => formChange("confirmPassword", e.target.value),
                required: true
              }}
            />
          </div>
          <div style={{ marginTop: '2.5rem' }}>
            <Button label="Change Password" variant="contained" fullWidth />
            <Button label="Forgot Password?" variant="text" customClassName='password_settings_form_btn' type="button" />
          </div>
        </form>
      </div>
    </main>
  );
};
