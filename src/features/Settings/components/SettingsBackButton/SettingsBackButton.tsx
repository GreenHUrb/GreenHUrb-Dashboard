// Import Styles
import './SettingsBackButton.scss'

// Import Libraries
import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

// Import Custom Components
import Button from '../../../../components/Button/Button';


interface SettingsBackButtonProps {
  name: string;
  route: string
}

const SettingsBackButton: React.FC<SettingsBackButtonProps> = ({ name, route }) => {
  const navigate = useNavigate()
  return (
    <div>
      <Button
        customClassName="settings_back_arrow_button"
        label={
          <div className="settings_back_arrow">
            <GoArrowLeft className="settings_back_arrow_icon" />
            <span className="settings_back_arrow_label">
              {name}
            </span>
          </div>
        }
        variant="text"
        onClick={() => navigate(route)}
      />

    </div>
  );
};

export default SettingsBackButton;
