import React from "react";
import "./CheckboxStyles.scss";

interface CheckboxProps {
  label?: string | JSX.Element;
  checkboxProps?: React.InputHTMLAttributes<HTMLInputElement>;
  inputClassName?: string;

}

const Checkbox = (props: CheckboxProps) => {
  const { label, checkboxProps, inputClassName } = props;
  return (
    <div className={`checkbox-container ${inputClassName}`}>
      <input
        id="ml-checkbox"
        name="ml-checkbox"
        type="checkbox"
        className="ml-input-checkbox"
        {...checkboxProps}
      />
      <label htmlFor="ml-checkbox">{label}</label>
    </div>
  );
};

export default Checkbox;
