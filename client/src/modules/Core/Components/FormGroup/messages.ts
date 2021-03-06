import { defineMessages } from "react-intl";

export default defineMessages({
  taken: {
    id: "errors.taken",
    defaultMessage: "This {field} is already taken",
  },
  invalid: {
    id: "errors.invalid",
    defaultMessage: "This {field} is invalid",
  },
  blank: {
    id: "errors.blank",
    defaultMessage: "This {field} can't be blank",
  },
});
