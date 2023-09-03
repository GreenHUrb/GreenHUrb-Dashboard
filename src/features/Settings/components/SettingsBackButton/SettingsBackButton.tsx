// Import Styles
import './SettingsBackButton.scss'

// Import Libraries
import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

// Import Custom Components
import Button from '../../../../components/Button/Button';
import { AllRouteConstants } from '../../../../router/RouteConstants';



const SettingsBackButton = () => {
  const navigate = useNavigate()
  return (
    <>
      <Button
        customClassName="settings_back_arrow_button"
        label={
          <div className="settings_back_arrow">
            <GoArrowLeft className="settings_back_arrow_icon" />
            <span className="settings_back_arrow_label">
              Back to Settings
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
