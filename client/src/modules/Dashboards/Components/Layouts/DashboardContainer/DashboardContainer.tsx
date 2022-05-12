import { FC } from "react";

import { Box } from "@UI/Components/Box/Box";
import type { BoxProps } from "@UI/Components/Box/Box";

interface Props extends BoxProps {}

export const DashboardContainer: FC<Props> = ({ children, ...props }) => {
  return (
    <Box
      minHeight="100vh"
      position="relative"
      background="white"
      width="full"
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
      <Box
        position="absolute"
        width="full"
        left="0"
        top="0"
        paddingX="12"
        paddingBottom="20"
        paddingTop="10"
      >
        {children}
      </Box>
    </Box>
  );
};
