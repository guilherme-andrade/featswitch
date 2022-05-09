import { FC } from "react";

import { Box } from "../Box/Box";
import type { BoxProps } from "../Box/Box";

interface Props extends BoxProps {}

export const Shell: FC<Props> = (props) => {
  return (
    <Box padding="6" rounded="lg" shadow="sm" background="white" {...props} />
  );
};
