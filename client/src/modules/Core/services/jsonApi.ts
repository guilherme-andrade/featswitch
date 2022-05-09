const jsonApiErrorMessageCodes = {
  "has already been taken": "taken",
  "is invalid": "invalid",
};

export interface IApiError {
  message: string;
  field: string;
}

export interface IApiErrors {
  [key: string]: IApiError[];
}

export const formatJsonApiErrors = (errors: any) => {
  const formattedErrors = {};
  errors.forEach((error: any) => {
    const [key, message] = error.detail.split(" - ");
    const messageObject = {
      message: jsonApiErrorMessageCodes[message] || message,
      field: key,
    };
    formattedErrors[key] ||= [];
    formattedErrors[key].push(messageObject);
  });
  return formattedErrors;
};
