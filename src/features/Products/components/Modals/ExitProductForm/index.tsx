import "./styles.scss";
import { PopModal } from "@layouts";
import WarningIcon from "@icons/modalWarning.svg";
import { Button, ModalHeader, ModalParagraph } from "@/components";
import { useNavigate } from "react-router-dom";
import { AllRouteConstants } from "@/router";

export const ExitProductForm = (props: { onClose: () => void }) => {
  const navigate = useNavigate();

  const { onClose } = props;

  return (
    <PopModal fullOverlay onClose={onClose}>
      <div className="exit_product_modal">
        <div className="exit_product_modal_container">
          <div className="exit_product_modal_heading_image">
            <img src={WarningIcon} alt="warning_icon" />
          </div>

          <div className="exit_product_modal_content">
            <ModalHeader heading="You are about to leave!" />

            <ModalParagraph message="Are You sure you want to exit? your changes will not be saved" />
          </div>

          <div className="exit_product_modal_btn_group">
            <Button label="Cancel" fullWidth variant="outlined" onClick={onClose} />
            <Button
              label="Yes, Exit"
              variant="contained"
              onClick={() => navigate(AllRouteConstants.products.index)}
              fullWidth
            />
          </div>
        </div>
      </div>
    </PopModal>
  );
};
