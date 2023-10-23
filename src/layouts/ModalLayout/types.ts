export interface IModalProps {
  children: JSX.Element;
  onClose: () => void;
  compulsoryClose?: boolean;
  fullOverlay?: boolean;
}
