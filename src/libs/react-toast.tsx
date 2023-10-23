import { toast } from "react-hot-toast";
import "../styles/react-toast-styles.scss";
import { FaCircleCheck } from "react-icons/fa6";
import { FaInfoCircle, FaExclamationCircle, FaTimesCircle } from "react-icons/fa";

interface IMakeToastOptions {
  message: string;
  type: "success" | "error" | "info" | "warning";
  id: string;
}

interface ToastMessageProps extends IMakeToastOptions {
  onClose: () => void;
}

const ToastMessage = (props: ToastMessageProps) => {
  const { message, onClose, type } = props;

  const getToastItems = () => {
    switch (type) {
      case "success":
        return {
          icon: <FaCircleCheck className="toast_icon" />,
          value: "Success"
        };
      case "error":
        return {
          icon: <FaTimesCircle className="toast_icon" />,
          value: "Error"
        };
      case "info":
        return {
          icon: <FaInfoCircle className="toast_icon" />,
          value: "Info"
        };
      case "warning":
        return {
          icon: <FaExclamationCircle className="toast_icon" />,
          value: "Warning"
        };
      default:
        return {
          icon: <FaInfoCircle className="toast_icon" />,
          value: "Info"
        };
    }
  };

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast_icon_container">{getToastItems().icon}</div>
      <div className="toast_text_container">
        <p>{getToastItems().value}</p>
        <p>{message}</p>
      </div>
      <button className="toast_button" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export const makeToast = (options: IMakeToastOptions) => {
  const { message, type, id } = options;

  return toast.custom(
    <ToastMessage message={message} onClose={() => toast.remove(id)} type={type} id={id} />,
    {
      position: "top-right",
      duration: 3000,
      id
    }
  );
};
