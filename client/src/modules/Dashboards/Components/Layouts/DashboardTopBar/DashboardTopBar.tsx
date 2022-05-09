import { FC } from "react";

import { Flex } from "@UI/Components/Flex/Flex";
import type { FlexProps } from "@UI/Components/Flex/Flex";

interface Props extends FlexProps {}

export const DashboardTopBar: FC<Props> = (props) => {
  return <Flex background="white" color="gray.500" padding="4" {...props} />;
};
