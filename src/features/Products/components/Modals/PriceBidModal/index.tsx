import "./styles.scss";
import { PopModal } from "@layouts";
import { Button, ModalHeader, ModalParagraph } from "@/components";

export const PriceBidModal = (props: { onClose: () => void }) => {
  return (
    <PopModal fullOverlay onClose={props.onClose}>
      <div className="price_bid_modal">
        <div className="price_bid_modal_container">
          <div className="price_bid_modal_content">
            <ModalHeader heading="What is a pride bid?" />

            <ModalParagraph
              message={`The "Price Bid" feature empowers customers to propose the amount they're willing to pay, giving you the flexibility to select the highest allowable amount`}
            />
          </div>

          <div className="price_bid_modal_btn_group">
            <Button label="Ok" variant="contained" onClick={props.onClose} fullWidth />
          </div>
        </div>
      </div>
    </PopModal>
  );
};
