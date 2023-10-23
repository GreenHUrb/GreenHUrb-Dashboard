import "./styles.scss";
import { PopModal } from "@layouts";
import { Button, Header } from "@components";
import image from "@images/femaleAvatar.svg";
import { IAuthModalProps } from "./types";

export const AuthModal = (props: IAuthModalProps) => {
  const { onClose, header, text, buttonText } = props;
  return (
    <PopModal fullOverlay onClose={onClose}>
      <div className="auth_modal_container">
        <Header message={header} variant="primary" size="lg" />

        <div>
          <img src={image} alt="Female Avatar" />
        </div>

        <p className="auth_modal_text">{text}</p>
        {buttonText && (
          <Button
            label={buttonText}
            variant="contained"
            type="button"
            onClick={onClose}
            customClassName="auth_modal_button"
          />
        )}
      </div>
    </PopModal>
  );
};
