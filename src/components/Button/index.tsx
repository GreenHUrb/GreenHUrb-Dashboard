import React from "react";
import "./styles.scss";
import { Spinner } from "@components";
import { IButtonProps } from "./types";


export const Button: React.FC<IButtonProps> = ({
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

