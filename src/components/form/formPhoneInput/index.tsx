import { forwardRef, useState } from "react";
import "./styles.scss";
import ArrowDown from "@icons/arrow-down.svg";
import CountryCodes from "../../../data/CountryCodes.json";

interface InputProps {
  id: string;
  label: string;
  error: string | null;
  inputClassName?: string;
  labelClassName?: string;
  value: string;
  onChange?: any;
  animation?: string;
}

export const PhoneInputField = ({
  id,
  value,
  onChange,
  error,
  label,
  inputClassName,
  labelClassName,
  animation
}: InputProps) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+234"); // Set an initial value

  return (
    <div className={`custom-phone_input ${animation}`}>
      <label htmlFor={id} className={`custom-phone_input__label ${labelClassName}`}>
        {label}
      </label>

      <div className="custom-phone_input__container">
        <div className="custom-phone_input__container__input  custom-phone_input__container__dropdown ">
          <div
            className="custom-phone_input__code_selector"
            onClick={() => setMenuOpened(!menuOpened)}
          >
            {selectedCountryCode}
            <img src={ArrowDown} alt="Arrow" className={`icon ${menuOpened ? "icon_up" : ""} `} />

            {menuOpened && (
              <div
                className={`custom-phone_input__code_selector__dropdown ${menuOpened && "active"} animate__animated animate__fadeIn`}
              >
                {CountryCodes.map((code, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedCountryCode(code.dial_code);
                      setMenuOpened(false);
                    }}
                  >
                    {code.dial_code} {code.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          <input
            // {...inputProps}
            // value={value}
            onChange={e => onChange(`${selectedCountryCode}${e.target.value}`)}
            id={id}
            type="number"
            className={` ${
              error ? "custom-phone_input__container__input-errored" : undefined
            } ${inputClassName}`}
          />
        </div>
      </div>

      <span
        className={`custom-phone_input__error ${
          !error ? "custom-phone_input__error-hidden" : undefined
        } animate__animated animate__fadeIn`}
      >{`${id} ${error}`}</span>
    </div>
  );
};
