import { PopModal } from "@layouts";
import { IErrorModal } from "./types";
import "./styles.scss";

export const ErrorModal = (props: IErrorModal) => {
  const { button, heading, message, transparentOverlay } = props;
  return (
    <PopModal solidOverlay={!transparentOverlay} fullOverlay onClose={() => console.log("hey")}>
      <div className="error_modal_content">
        <img src="https://100dayscss.com/codepen/alert.png" width={44} height={38} />
        <span className="title">{heading}</span>
        <p>{message}</p>
        <div className="button">{button}</div>
      </div>
    </PopModal>
  );
};
