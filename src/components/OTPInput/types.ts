// Define the Props type for the component.
export type IOtpProps = {
  value: string; // Current OTP value.
  valueLength: number; // Length of the OTP.
  onChange: (value: string) => void; // Callback function for value change.
};
