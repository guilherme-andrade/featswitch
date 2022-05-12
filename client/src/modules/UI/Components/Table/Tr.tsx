import { FC, useState } from "react";
import { Tr as ChakraTr } from "@chakra-ui/table";
import type { TableRowProps } from "@chakra-ui/table";

interface Props extends TableRowProps {
  clickable?: boolean;
}

export const Tr: FC<Props> = ({ children, clickable, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = (e: React.MouseEvent<HTMLTableRowElement>) => {
    setIsHovered(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLTableRowElement>) => {
    setIsHovered(false);
  };

  return (
    <ChakraTr
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      cursor={isHovered && clickable ? "pointer" : "default"}
      {...props}
      sx={
        clickable
          ? {
              "&:hover": {
                td: {
                  background: "gray.50",
                },
              },
            }
          : {}
      }
    >
      {children}
    </ChakraTr>
  );
};
