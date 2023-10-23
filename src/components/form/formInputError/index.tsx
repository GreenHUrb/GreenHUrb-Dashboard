import "./styles.scss";
import { FormInputErrorProps } from "./types";

export const FormInputError = (props: FormInputErrorProps) => {
  const { id, error } = props;
  return (
    <span
      className={`form-input__error ${
        !error ? "form-input__error-hidden" : undefined
      } animate__animated animate__fadeIn`}
    >{`${id} ${error}`}</span>
  );
};
