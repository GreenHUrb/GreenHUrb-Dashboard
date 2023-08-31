import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { usePageInfoActions } from "../../../hooks/useReduxActions";
import Input from "../../../components/form/Input/Input";
import ProfileImage from "../../../assets/icons/settingsProfile.png";
import Button from "../../../components/Button/Button";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface AccountSettingsProps {}

export const AccountSettings: React.FC<AccountSettingsProps> = ({}) => {
  return (
    <main className="settings_account">
      <Button label="Back to product" variant="text" />

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
            <div className="input">
              <Input
                id="full-name"
                inputProps={{ placeholder: "John Doe", type: "text" }}
                error={null}
                animation="animate__animated animate__fadeInRight"
                label="Full name"
              />
            </div>

            <div className="input">
              <Input
                id="email"
                inputProps={{ placeholder: "JohnDoe@gmail.com", type: "text" }}
                error={null}
                animation="animate__animated animate__fadeInRight"
                label="Email address"
              />
            </div>

            <div className="input">
              <Input
                id="phone-number"
                inputProps={{ placeholder: "9021010101", type: "number" }}
                error={null}
                animation="animate__animated animate__fadeInRight"
                label="Phone number"
              />
            </div>
          </div>
        </div>

        <div className="settings_account_business-info">
          <h3>Business information</h3>
          <p>The information presented here is solely relevant to business matters.</p>

          <div className="settings_account_business-input">
            <div className="input">
              <Input
                id="farm-name"
                inputProps={{ type: "text" }}
                error={null}
                animation="animate__animated animate__fadeInRight"
                label="Farm name"
              />
            </div>

            <div style={{ display: "flex", gap: "1rem", justifyContent: 'space-between' }}>
              <Input
                id="state"
                inputProps={{ placeholder: "Select state", type: "text" }}
                error={null}
                animation="animate__animated animate__fadeInRight"
                label="State"
                inputClassName="settings_account_business-input-item"
                rightIcon={<MdOutlineKeyboardArrowDown size={30} />}
              />

              <Input
                id="city"
                inputProps={{ placeholder: "Select city", type: "text" }}
                error={null}
                animation="animate__animated animate__fadeInRight"
                label="City"
                inputClassName="settings_account_business-input-item"
                rightIcon={<MdOutlineKeyboardArrowDown size={30} />}
              />
            </div>
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
