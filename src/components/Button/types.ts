export interface IButtonProps {
  label: string | React.ReactNode;
  variant: "outlined" | "contained" | "text";
  disable?: boolean;
  loading?: boolean;
  type?: "button" | "submit";
  onClick?: VoidFunction;
  ref?: any;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  fullWidth?: boolean;
  customClassName?: string;
}
