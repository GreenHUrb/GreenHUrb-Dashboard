export interface IAuthModalProps {
  onClose: () => void;
  header: string;
  text: JSX.Element | string;
  buttonText?: string;
}
