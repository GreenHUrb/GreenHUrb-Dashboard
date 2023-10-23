import { useState } from "react";

export type FormError<T extends object> = {
  [Prop in keyof T]: string | null;
};
export type Validator<T extends object> = {
  [Prop in keyof T]?: (arg: T[Prop]) => string | null;
};

/**
 * useForm custom hook for managing form state and validation.
 *
 * @template T - Generic type representing the form data structure.
 * @param {T} initialState - Initial form state.
 * @param {Validator<T>} validators - Object containing validation functions for each field.
 * @returns {{
 *   form: T,
 *   onChange: (name: keyof T, value: T[keyof T]) => void,
 *   reset: () => void,
 *   resetFormErrors: (key?: keyof T) => void,
 *   validate: () => boolean,
 *   formErrors: FormError<T>
 * }} The form object and functions to manage and validate form state.
 */

export const useForm = <T extends object>(initialState: T, validators: Validator<T>) => {
  const [form, setForm] = useState<T>(initialState);
  const getDefaultFormErrors = () => {
    const result: Record<string, null> = {};

    Object.keys(initialState).map(key => {
      return (result[key] = null);
    });

    return result as FormError<T>;
  };

  const [formErrors, setFormErrors] = useState<FormError<T>>(getDefaultFormErrors());

  const resetFormErrors = (key?: keyof T) => {
    if (!key) {
      setFormErrors(getDefaultFormErrors());
    } else {
      setFormErrors(prev => ({ ...prev, key: null }));
    }
  };

  const onChange = (name: keyof T, value: T[keyof T]) => {
    setForm(prev => ({ ...prev, [name]: value }));

    const validator = validators[name as keyof T];

    const error = validator ? validator(value) : null;

    setFormErrors(prev => ({ ...prev, [name as keyof T]: error }));
  };

  const validate = (): boolean => {
    let valid = true;

    Object.keys(formErrors).map(key => {
      if (formErrors[key as keyof T]) valid = false;
    });

    return valid;
  };

  const reset = () => {
    setForm(initialState);
    setFormErrors(getDefaultFormErrors());
  };

  return { form, onChange, reset, resetFormErrors, validate, formErrors };
};
