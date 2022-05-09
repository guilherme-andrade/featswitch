import { FC } from "react";

import { Heading } from "@UI/Components/Heading/Heading";
import type { HeadingProps } from "@UI/Components/Heading/Heading";

interface Props extends HeadingProps {}

export const DashboardTitle: FC<Props> = (props) => {
  return <Heading fontSize="3xl" marginBottom="2" {...props} />;
};
