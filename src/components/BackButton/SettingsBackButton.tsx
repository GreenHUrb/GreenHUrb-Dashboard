// Import Styles
import './BackButton.scss'

// Import Libraries
import { GoArrowLeft } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

// Import Custom Components

interface IBackButton {
  locationName: string;
  locationRoute: string
}

const BackButton = ({ locationName, locationRoute }: IBackButton) => {
  const navigate = useNavigate()
  return (
    <>
      <Button
        customClassName="back_arrow_button"
        label={
          <div className="back_arrow">
            <GoArrowLeft className="back_arrow_icon" />
            <span className="back_arrow_label">
              {locationName}
            </span>
          </div>
        }
        variant="text"
        onClick={() => navigate(locationRoute)}
      />

    </>
  );
};

export default BackButton;
