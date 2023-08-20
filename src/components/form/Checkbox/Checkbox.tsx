import React from "react";
import "./CheckboxStyles.scss";

interface CheckboxProps {
  label: string | JSX.Element;
  checkboxProps?: React.InputHTMLAttributes<HTMLInputElement>;

}

const Checkbox = (props: CheckboxProps) => {
  const { label, checkboxProps } = props;
  return (
    <div className={`checkbox-container`}>
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
