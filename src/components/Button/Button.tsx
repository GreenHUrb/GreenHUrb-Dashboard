import React from "react";
import "./ButtonStyles.scss";
import Spinner from "../Spinner/Spinner";

interface buttonProps {
  label: string | React.ReactNode;
  variant: "outlined" | "contained" | "text";
  disable?: boolean;
  loading?: boolean;
  type?: "button" | "submit";
  onClick?: VoidFunction;
  ref?: any;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  fullWidth?: boolean
  customClassName?: string
}

const Button: React.FC<buttonProps> = ({
  disable,
  onClick,
  variant,
  loading,
  label,
  type,
  buttonProps,
  ref,
  fullWidth,
  customClassName
}) => {
  return (
    <button
      type={type || "submit"}
      ref={ref}
      onClick={onClick}
      disabled={disable || loading}
      {...buttonProps}
      className={`custom-button custom-button_${variant} ${fullWidth ? 'custom-button_full-width' : ''} ${customClassName}`}
    >
      <span>
        {label}
        {loading && (
          <>
            <Spinner />
          </>
        )}
      </span>
    </button>
  );
};

export default Button;
