import { FC, ReactNode } from "react";
import { ChakraProvider, ChakraProviderProps } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
  theme: ChakraProviderProps["theme"];
}

export const ThemeProvider: FC<Props> = ({ children, theme }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      {children}
    </ChakraProvider>
  );
};
