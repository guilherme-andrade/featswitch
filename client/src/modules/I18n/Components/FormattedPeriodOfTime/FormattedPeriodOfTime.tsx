import React, { FC } from "react";

import { FormattedPlural } from "../FormattedPlural/FormattedPlural";
import { FormattedMessage } from "../FormattedMessage/FormattedMessage";
import messages from "./messages";

interface Props {
  value: number;
  unit: string;
}

export type ILocalizePeriod = (
  value: number,
  unit: string
) => JSX.Element | string;

const unitMap = {
  year: (value) => {
    return { value, unit: "year" };
  },
  semester: (value) => {
    if (value % 2 === 0) {
      return { value, unit: "year" };
    } else {
      return { value, unit: "semester" };
    }
  },
  quarter: (value) => {
    if (value % 4 === 0) {
      return { value, unit: "year" };
    } else if (value % 2 === 0) {
      return { value, unit: "semester" };
    } else {
      return { value, unit: "quarter" };
    }
  },
  month: (value) => {
    if (value % 12 === 0) {
      return { value: value / 12, unit: "year" };
    } else if (value % 6 === 0) {
      return { value: value / 6, unit: "semester" };
    } else if (value % 3 === 0) {
      return { value: value / 3, unit: "quarter" };
    } else {
      return { value, unit: "month" };
    }
  },
  week: (value) => ({ value, unit: "week" }),
};

export const FormattedPeriodOfTime: FC<Props> = ({ value, unit }) => {
  const { value: unitValue, unit: unitUnit } = unitMap[unit](value);
  const formattedMessages = {
    one: null,
    other: null,
  };

  Object.keys(messages[unitUnit]).forEach((pluralKey) => {
    formattedMessages[pluralKey] = (
      <FormattedMessage {...messages[unitUnit][pluralKey]} />
    );
  });

  return <FormattedPlural {...formattedMessages} value={unitValue} />;
};
