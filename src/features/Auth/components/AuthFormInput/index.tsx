import "./styles.scss";
import {FormInputError} from "../../../../components/form/formInputError";
import { FormInputProps } from "./types";



export function AuthFormInput(props: FormInputProps) {
  const {
    id,
    inputProps,
    error,
    label,
    rightIcon,
    inputClassName,
    labelClassName,
    animation,
  } = props;
  return (
    <div className={`auth-form-component ${animation}`}>
      <label
        htmlFor={id}
        className={`auth-form-component_label ${labelClassName}`}
      >
        {label}
        {inputProps?.required && (
          <span className="input_required_asterisk">*</span>
        )}
      </label>

      <div
        className={`auth-form-component_input-container ${error ? "auth-form-component_input-container__errored" : undefined
          }  `}
      >
        <input
          {...inputProps}
          id={id}
          className={`auth-form-component_input-container__input ${inputClassName}`}
        />

        {rightIcon && <div className="right-icon">{rightIcon}</div>}
      </div>
      <FormInputError error={error} id={id} />
    </div>
  );
}
