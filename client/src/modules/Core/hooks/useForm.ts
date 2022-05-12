import { useForm as useReactHookForm } from "react-hook-form";
import type { UseFormProps } from "react-hook-form";
export type { UseFormProps } from "react-hook-form";

export const useForm = (props?: UseFormProps<any>) => {
  const {
    formState: { errors: formErrors, ...formState },
    ...rest
  } = useReactHookForm(props);

  const errors = {};

  formErrors &&
    Object.keys(formErrors).forEach((errorKey) => {
      const error = formErrors[errorKey];
      errors[error.name] ||= [];
      errors[error.name].push({ field: error.name, type: error.message });
    });

  return {
    ...rest,
    formState,
    errors,
  };
};
