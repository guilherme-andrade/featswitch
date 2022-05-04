import { defineMessages } from "react-intl";

export default {
  week: defineMessages({
    one: {
      id: "week.one",
      defaultMessage: "week",
    },
    other: {
      id: "week.other",
      defaultMessage: "weeks",
    },
  }),
  month: defineMessages({
    one: {
      id: "month.one",
      defaultMessage: "month",
    },
    other: {
      id: "month.other",
      defaultMessage: "{itemCount} months",
    },
  }),
  quarter: defineMessages({
    one: {
      id: "quarter.one",
      defaultMessage: "quarter",
    },
    other: {
      id: "quarter.other",
      defaultMessage: "{itemCount} quarters",
    },
  }),
  semester: defineMessages({
    one: {
      id: "semester.one",
      defaultMessage: "semester",
    },
    other: {
      id: "semester.other",
      defaultMessage: "{itemCount} semesters",
    },
  }),
  year: defineMessages({
    one: {
      id: "year.one",
      defaultMessage: "year",
    },
    other: {
      id: "year.other",
      defaultMessage: "{itemCount} years",
    },
  }),
};
