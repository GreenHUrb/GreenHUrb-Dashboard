export interface InputProps {
  id: string;
  label: string|JSX.Element;
  error: string | null;
  inputClassName?: string;
  labelClassName?: string;
  className?: string;
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  requiredAstersik?: boolean;
  animation?: string;
}

export type Ref = any;
