import { FC } from "react";

import { Text } from "@UI/Components/Text/Text";
import type { TextProps } from "@UI/Components/Text/Text";

interface Props extends TextProps {}

export const DashboardSubtitle: FC<Props> = (props) => {
  return (
    <Text
      fontSize="lg"
      color="gray.500"
      fontWeight="light"
      marginBottom="5"
      {...props}
    />
  );
};
