export interface FormInputProps {
  id: string;
  label: string;
  error: string | null;
  inputClassName?: string;
  labelClassName?: string;
  rightIcon?: JSX.Element;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  animation?: string;
}
