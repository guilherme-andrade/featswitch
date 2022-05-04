import { FC } from "react";
import { AuthLayout } from "../../Layouts/AuthLayout/AuthLayout";

import { Box } from "@UI/Components/Box/Box";
import { Stack } from "@UI/Components/Stack/Stack";
import { Heading } from "@UI/Components/Heading/Heading";
import { FormControl } from "@UI/Components/FormControl/FormControl";
import { FormHelperText } from "@UI/Components/FormHelperText/FormHelperText";
import { FormLabel } from "@UI/Components/FormLabel/FormLabel";
import { Input } from "@UI/Components/Input/Input";
import { Button } from "@UI/Components/Button/Button";

export const LoginPage: FC = () => {
  return (
    <AuthLayout>
      <Box padding="10">
        <Stack spacing="6">
          <Heading size="md">Login Page</Heading>
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" type="password" />
          </FormControl>
          <Button colorScheme="blue">Login</Button>
        </Stack>
      </Box>
    </AuthLayout>
  );
};
