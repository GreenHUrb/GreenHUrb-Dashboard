import { useEffect, useState } from "react";
import "./styles.scss";
import { IModalProps } from "./types";

export function PopModal(props: IModalProps) {
  const { children, onClose, compulsoryClose, fullOverlay, solidOverlay } = props;
  const [showModalCard, setShowModalCard] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModalCard(true);
    }, 10);
  }, []);

  return (
    <div className={`modal ${fullOverlay ? "modal-fullOverlay" : ""} pop-modal `}>
      <div
        className={`modal-background ${solidOverlay ? "modal-solid-overlay" : ""}`}
        onClick={() => {
          if (!compulsoryClose) {
            setShowModalCard(false);
          }
          setTimeout(() => {
            onClose();
          }, 100);
        }}
      />
      <div className={`modal-card ${showModalCard ? "show" : ""}`}>{children}</div>
    </div>
  );
}
