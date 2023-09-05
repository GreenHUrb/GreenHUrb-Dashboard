
export type FormSelectProps = {
  id: string;
  error: string | null;
  labelClassName?:string
  options: { value: string; label: string }[];
  label: string;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  small?: boolean;
  loading?: boolean;
  dropdownProps?: any
  isMulti?: boolean;
};
