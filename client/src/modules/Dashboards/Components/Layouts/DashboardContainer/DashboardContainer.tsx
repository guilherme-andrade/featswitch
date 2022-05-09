import { FC } from "react";

import { Box } from "@UI/Components/Box/Box";
import type { BoxProps } from "@UI/Components/Box/Box";

interface Props extends BoxProps {}

export const DashboardContainer: FC<Props> = ({ children, ...props }) => {
  return (
    <Box
      paddingX="12"
      paddingTop="10"
      paddingBottom="20"
      minHeight="100vh"
      position="relative"
      background="white"
      _before={{
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "gray.50",
        borderTopLeftRadius: "3xl",
      }}
      {...props}
    >
      <Box position="absolute">{children}</Box>
    </Box>
  );
};
