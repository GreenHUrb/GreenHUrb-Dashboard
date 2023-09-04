// Import Styles
import './SettingsBackButton.scss'

// Import Libraries
import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

// Import Custom Components
import Button from '../../../../components/Button/Button';
import { AllRouteConstants } from '../../../../router/RouteConstants';

interface ISettingsBackButton {
  locationName?: string;
}

const SettingsBackButton = ({locationName = 'Back to Settings'}: ISettingsBackButton) => {
  const navigate = useNavigate()
  return (
    <>
      <Button
        customClassName="settings_back_arrow_button"
        label={
          <div className="settings_back_arrow">
            <GoArrowLeft className="settings_back_arrow_icon" />
            <span className="settings_back_arrow_label">
              {locationName}
            </span>
          </div>
        }
        variant="text"
        onClick={() => navigate(AllRouteConstants.settings.index)}
      />

    </>
  );
};

export default SettingsBackButton;
