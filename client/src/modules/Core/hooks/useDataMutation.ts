import { useState } from "react";
import { useMutation, QueryArg, ApiClient, StringMap } from "jsonapi-react";

import { formatJsonApiErrors, IApiErrors } from "@Core/services/jsonApi";

interface IExtendedResult<TData = StringMap | StringMap[]> {
  errors?: StringMap;
  data?: TData;
  meta?: StringMap;
  links?: StringMap;
  error?: StringMap;
  refetch?: () => void;
  isLoading?: boolean;
  isFetching?: boolean;
  client: ApiClient;
}

export function useDataMutation<TData = StringMap | StringMap[]>(
  queryString: QueryArg,
  config?: {
    invalidate?: boolean | string | string[];
    method?: string;
    client?: ApiClient;
  }
): {
  mutate: (any) => Promise<IExtendedResult<TData>>;
  result: IExtendedResult<TData>;
  errors: IApiErrors;
  clearErrors: () => void;
} {
  const [errors, setErrors] = useState<StringMap>({});
  const [jsonApiMutate, result] = useMutation<TData>(queryString, config);

  const mutate = async (data: any) => {
    const response = await jsonApiMutate(data);
    let formattedErrors: IApiErrors;

    if (response.errors) {
      formattedErrors = formatJsonApiErrors(response.errors);
      setErrors(formattedErrors);
    }

    return { ...response, errors: formattedErrors };
  };

  const clearErrors = () => {
    setErrors({});
  };

  return { mutate, result, errors, clearErrors };
}
