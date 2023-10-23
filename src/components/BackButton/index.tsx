// Import Styles
import "./styles.scss";

import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { IBackButton } from "./types";
import { Button } from "@components";

export const BackButton = ({ locationName, locationRoute, customFunc }: IBackButton) => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        customClassName="back_arrow_button"
        label={
          <div className="back_arrow">
            <GoArrowLeft className="back_arrow_icon" />
            <span className="back_arrow_label">{locationName}</span>
          </div>
        }
        variant="text"
        onClick={() => (customFunc ? customFunc() : navigate(locationRoute))}
      />
    </>
  );
};
