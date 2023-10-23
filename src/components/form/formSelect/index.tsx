/* eslint-disable react/jsx-props-no-spreading */
import Select from "react-select";
import "./styles.scss";
import { FormSelectProps } from "./types";

export function FormSelect(props: FormSelectProps) {
  const { error, id, options, disabled, dropdownProps, isMulti, label, loading, placeholder, labelClassName } = props
  return (
    <div className="custom-select">
      <label htmlFor={id} className={`custom-select__label ${labelClassName}`}>
        {label}
      </label>
      <div data-testid={id}>
        <Select
          options={options}
          placeholder={placeholder}
          isDisabled={disabled}
          isMulti={isMulti}
          {...dropdownProps}
          isLoading={loading}
          id={id}
        />
      </div>

      <span
        className={`custom-select__error ${!error ? "custom-select__error-hidden" : undefined
          } animate__animated animate__fadeIn`}
      >{`${id} ${error}`}</span>
    </div>
  );
}

