import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Import Custom Components and Styles
import { AllRouteConstants } from "../../../router/RouteConstants";
import SettingsBackButton from "../components/SettingsBackButton/SettingsBackButton";
import Input from "../../../components/form/Input/Input";
import Button from "../../../components/Button/Button";
import ProfileImage from "../../../assets/icons/settingsProfile.png";
import "../styles/account_settings_styles.scss";
import { handleFormatLabelForId } from "../../../utils/formUtils";
import useAccountSettings from "../hooks/useAccountSettings";
import { SingleFarmField } from "../components/FarmForm/FarmForm";

export const AccountSettings = () => {
  // Initialize custom hooks and state variables
  const {
    accountSettingsMode,
    handleChangeAccountSettingsMode,
    accountProfileForm,
    accountProfileFormErrors,
    handleAccountProfileFormChange,
    handleAddFarm,
    handleUpdateFarm,
    addFarm,
    handleCloseAddFarmForm,
    handleOpenAddFarmForm
  } = useAccountSettings();

  return (
    <main className="settings_account animate__animated animate__fadeIn">
      {/* Back button */}
      <SettingsBackButton name="Back to Settings" route={AllRouteConstants.settings.index} />

      <div className="settings_account_profile">
        <div className="settings_account_profile-info">
          {/* Profile photo */}
          <h3>Profile photo</h3>
          <div className="settings_account_profile-photo-container">
            <div className="settings_account_profile-photo">
              <LazyLoadImage src={ProfileImage} alt="profile" width={20} height={20} />
            </div>
            {accountSettingsMode === 'edit' && (
              <Button label="Edit profile photo" variant="text" />
            )}
          </div>

          {/* Profile information */}
          <div className="settings_account_profile-info_content">
            <h3>Profile information</h3>
            <p>Personal information of the business owner</p>
          </div>

          <div className="settings_account_profile-input">
            {/* Input fields for Full Name, Email Address, and Phone Number */}
            <div className="input">
              <Input
                id={handleFormatLabelForId("Full Name")}
                error={accountProfileFormErrors.fullName}
                label="Full Name"
                inputProps={{
                  placeholder: "Enter your Full Name",
                  required: true,
                  value: accountProfileForm.fullName,
                  onChange: e => handleAccountProfileFormChange("fullName", e.target.value),
                  readOnly: accountSettingsMode === "view" ? true : false
                }}
              />
            </div>
            <div className="input">
              <Input
                id={handleFormatLabelForId("Email Address")}
                error={accountProfileFormErrors.emailAddress}
                label="Email Address"
                inputProps={{
                  placeholder: "Enter your Email Address",
                  required: true,
                  value: accountProfileForm.emailAddress,
                  onChange: e => handleAccountProfileFormChange("emailAddress", e.target.value),
                  readOnly: accountSettingsMode === "view" ? true : false
                }}
              />
            </div>
            <div className="input">
              <Input
                id={handleFormatLabelForId("Phone Number")}
                error={accountProfileFormErrors.phoneNumber}
                label="Phone Number"
                inputProps={{
                  placeholder: "Enter your Phone Number",
                  required: true,
                  value: accountProfileForm.phoneNumber,
                  onChange: e => handleAccountProfileFormChange("phoneNumber", e.target.value),
                  readOnly: accountSettingsMode === "view" ? true : false
                }}
              />
            </div>
          </div>
        </div>

        <div className="settings_account_business-info">
          <div className="settings_account_business-info_header">
            <h3>Business information</h3>
            <p>The information presented here is solely relevant to business matters.</p>
          </div>

          <div className="settings_account_business-form_container">
            <div className="settings_account_business-form_container_inputs">
              {/* Render farm fields */}
              {accountProfileForm.farms.map((farm, index) => (
                <SingleFarmField
                  onFormSubmit={(farm) => handleUpdateFarm(farm, index)}
                  farm={farm}
                  key={index}
                  pageMode={accountSettingsMode}
                />
              ))}

              {/* Add farm field if the 'addFarm' status is true */}
              {addFarm.status && (
                <SingleFarmField
                  onFormSubmit={handleAddFarm}
                  farm={addFarm.farm}
                  pageMode={"add"}
                  handleCancel={handleCloseAddFarmForm}
                />
              )}
            </div>

            {/* Add More Farms button (visible in edit mode) */}
            {accountSettingsMode === "edit" && !addFarm.status && (
              <Button
                label="Add More Farms"
                variant="text"
                onClick={handleOpenAddFarmForm}
                type="button"
              />
            )}

            <div
              style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {/* Update/Edit and Cancel buttons */}
              <Button
                label={`${accountSettingsMode === "edit" ? "Update " : "Edit"} information`}
                variant="contained"
                fullWidth
                onClick={() => handleChangeAccountSettingsMode("edit")}
                type="button"
              />
              {accountSettingsMode === "edit" && (
                <Button
                  label="Cancel"
                  variant="outlined"
                  onClick={() => handleChangeAccountSettingsMode("view")}
                  fullWidth
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
