
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GoArrowLeft } from 'react-icons/go'

import Input from "../../../components/form/Input/Input";
import Button from "../../../components/Button/Button";
import ProfileImage from "../../../assets/icons/settingsProfile.png";
import { useNavigate } from "react-router-dom";
import { AllRouteConstants } from "../../../router/RouteConstants";
import SettingsBackButton from "../components/SettingsBackButton";

interface AccountSettingsProps { }

export const AccountSettings: React.FC<AccountSettingsProps> = () => {

  const inputFields = [
    { label: "Full name", placeholder: "John Doe", type: "text" },
    { label: "Email address", placeholder: "JohnDoe@gmail.com", type: "text" },
    { label: "Phone number", placeholder: "9021010101", type: "number" }
  ];

  const businessFields = [
    { label: "Farm name", placeholder: "", type: "text" },
    { label: "State", placeholder: "Select state", type: "text" },
    { label: "City", placeholder: "Select city", type: "text" }
  ];

  return (
    <main className="settings_account animate__animated animate__fadeIn">
      <SettingsBackButton name="Back to products" route={AllRouteConstants.products.index} />

      <div className="settings_account_profile">
        <div className="settings_account_profile-info">
          <h3>Profile photo</h3>
          <div className="settings_account_profile-photo-container">
            <div className="settings_account_profile-photo">
              <LazyLoadImage src={ProfileImage} alt="profile" width={20} height={20} />
            </div>
            <Button label="Edit profile photo" variant="text" />
          </div>

          <h3>Profile information</h3>
          <p>Personal information of business owner</p>

          <div className="settings_account_profile-input">
            {inputFields.map(({ label, placeholder, type }) => (
              <div className="input" key={label}>
                <Input
                  id={label.toLowerCase().replace(/\s+/g, '-')}
                  inputProps={{ placeholder, type }}
                  error={null}
                  animation="animate__animated animate__fadeInRight"
                  label={label}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="settings_account_business-info">
          <h3>Business information</h3>
          <p>The information presented here is solely relevant to business matters.</p>

          <div className="settings_account_business-input">
            {businessFields.map(({ label, placeholder, type }) => (
              <div className="input" key={label}>
                <Input
                  id={label.toLowerCase().replace(/\s+/g, '-')}
                  inputProps={{ placeholder, type }}
                  error={null}
                  animation="animate__animated animate__fadeInRight"
                  label={label}
                  inputClassName={
                    label === "State" || label === "City"
                      ? "settings_account_business-input-item"
                      : undefined
                  }
                  rightIcon={
                    (label === "State" || label === "City") ? <MdOutlineKeyboardArrowDown size={30} /> : <></>
                  }
                />
              </div>
            ))}
            <Button label="Add more farms" variant="text" />

            <div
              style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Button label="Edit information" variant="contained" fullWidth />
              <Button label="Cancel" variant="outlined" fullWidth />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

