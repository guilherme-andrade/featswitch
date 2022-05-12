import { useState, useEffect } from "react";
import { useForm, UseFormProps } from "./useForm";
import {
  useDataMutation,
  IQueryArg,
  IQueryConfig,
  StringMap,
} from "./useDataMutation";

export function useDataForm<TData = StringMap | StringMap[]>(
  queryString: IQueryArg,
  dataConfig?: IQueryConfig,
  formConfig?: UseFormProps<TData>
) {
  const [errors, setErrors] = useState<StringMap>({});
  const {
    mutate,
    result,
    errors: dataErrors,
    clearErrors: clearDataErrors,
  } = useDataMutation(queryString, dataConfig);
  const {
    register,
    handleSubmit: handleFormSubmit,
    errors: formErrors,
  } = useForm(formConfig);

  const clearErrors = () => {
    clearDataErrors();
    setErrors({});
  };

  useEffect(() => {
    setErrors({ ...formErrors, ...dataErrors });
  }, [dataErrors, formErrors]);

  const handleSubmit = (callback) =>
    handleFormSubmit(async (data) => {
      clearErrors();
      const response = await mutate(data);
      if (response.errors) {
        setErrors(response.errors);
      }
      callback(response);
    });

  return {
    register,
    handleSubmit,
    errors,
    result,
    clearErrors,
  };
}
