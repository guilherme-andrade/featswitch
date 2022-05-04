import { FC, ReactNode } from "react";
import { Container } from "@UI/Components/Container/Container";
import { Box } from "@UI/Components/Box/Box";

interface Props {
  children: ReactNode;
}

export const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <Box minHeight="100vh" minWidth="100vw">
      <Container
        maxW="lg"
        py={{ base: "12", md: "24" }}
        px={{ base: "0", sm: "8" }}
      >
        {children}
      </Container>
    </Box>
  );
};
