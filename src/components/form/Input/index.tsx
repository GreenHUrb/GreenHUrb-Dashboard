import React, { forwardRef } from "react";
import "./styles.scss";
import { InputProps, Ref } from "./types";

export const Input = forwardRef<Ref, InputProps>(
  (
    {
      id,
      inputProps,
      error,
      label,
      rightIcon,
      inputClassName,
      labelClassName,
      animation,
      className,
      leftIcon
    },
    ref
  ) => {
    return (
      <div className={`custom-input ${animation}`}>
        <label htmlFor={id} className={`custom-input__label ${labelClassName}`}>
          {label}
        </label>

        <div className="custom-input__container">
          {leftIcon && <div className={`custom-input_left_icon `}>{leftIcon}</div>}

          <input
            ref={ref}
            {...inputProps}
            id={id}
            className={`custom-input__container__input ${
              error ? "custom-input__container__input-errored" : undefined
            } ${className}`}
          />

          {rightIcon && <div className={`right-icon ${inputClassName}`}>{rightIcon}</div>}
        </div>

        <span
          className={`custom-input__error ${
            !error ? "custom-input__error-hidden" : undefined
          } animate__animated animate__fadeIn`}
        >{`${id} ${error}`}</span>
      </div>
    );
  }
);

interface TextAreaProps {
  id: string;
  label: string;
  error: string | null;
  inputClassName?: string;
  labelClassName?: string;
  textareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  rows?: number;
  requiredAstersik?: boolean;
  animation?: string;
}
export const TextArea = ({
  id,
  textareaProps,
  error,
  label,
  inputClassName,
  rows,
  requiredAstersik,
  labelClassName,
  animation
}: TextAreaProps) => {
  return (
    <div className={`custom-input ${animation}`}>
      <label htmlFor={id} className={`custom-input__label ${labelClassName}`}>
        {label}{" "}
        {requiredAstersik && textareaProps?.required && (
          <span className="input_required_asterisk">*</span>
        )}{" "}
      </label>

      <div className="custom-input__container">
        <textarea
          id={id}
          {...textareaProps}
          rows={rows ?? 10}
          className={`custom-input__container__input ${inputClassName} ${
            error ? "custom-input__container__input-errored" : undefined
          }`}
        />
      </div>

      <span
        className={`custom-input__error ${
          !error ? "custom-input__error-hidden" : undefined
        } animate__animated animate__fadeIn`}
      >{`${id} ${error}`}</span>
    </div>
  );
};
