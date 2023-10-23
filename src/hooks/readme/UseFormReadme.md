## API Documentation

### `useForm<T>(initialState: T, validators: Validator<T>)`

The `useForm` hook takes two arguments:

- `initialState` (type: `T`): The initial state of the form.
- `validators` (type: `Validator<T>`): An object containing validation functions for each field in the form.

The hook returns an object with the following properties and methods:

- `form`: The current state of the form.
- `onChange(name: keyof T, value: T[keyof T]): void`: A function to handle input changes and update form state.
- `reset(): void`: A function to reset the form to its initial state.
- `resetFormErrors(key?: keyof T): void`: A function to reset form error messages. If a specific `key` is provided, only that error message will be reset.
- `validate(): boolean`: A function that validates the form based on the provided validation functions and returns `true` if the form is valid, otherwise `false`.
- `formErrors`: An object containing error messages for each field in the form.

## Example

For a detailed example of how to use the `useForm` hook, see how it was used to build a simple login Component Below

```jsx
import React from "react";
import { useForm } from "./path/to/useForm"; // Adjust the path

/**
 * Represents the login form data structure.
 *
 * @typedef {Object} ILogin
 * @property {string} email - The user's email address.
 * @property {string} password - The user's password.
 */

/**
 * Component demonstrating usage of the login form.
 *
 * @returns {JSX.Element} JSX element.
 */
const LoginFormComponent = () => {
  const loginForm = useForm<ILogin>(
    { email: "", password: "" },
    { email: emailValidator, password: emptyValidator }
  );

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    loginForm.onChange(name, value);
  };

  const handleSubmit = () => {
    if (loginForm.validate()) {
      // Submit the form data
    }
  };

  return (
    <form>
      <input
        type="text"
        name="email"
        value={loginForm.form.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        value={loginForm.form.password}
        onChange={handleInputChange}
      />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default LoginFormComponent;

```
