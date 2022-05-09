import { FC, ReactNode } from "react";

// UI
import { Flex } from "@UI/Components/Flex/Flex";
import { Box } from "@UI/Components/Box/Box";
import { VStack } from "@UI/Components/VStack/VStack";
import { Button } from "@UI/Components/Button/Button";
import { Avatar } from "@UI/Components/Avatar/Avatar";
import { Text } from "@UI/Components/Text/Text";
import { Heading } from "@UI/Components/Heading/Heading";
import { Divider } from "@UI/Components/Divider/Divider";
import { ToggleIcon } from "@UI/Components/Icons/ToggleIcon";
import { UsersListIcon } from "@UI/Components/Icons/UsersListIcon";
import { InboxIcon } from "@UI/Components/Icons/InboxIcon";

// I18n
import messages from "./messages";
import { FormattedMessage } from "@I18n/Components/FormattedMessage/FormattedMessage";

// Router
import { NavLink } from "@Core/Components/NavLink/NavLink";
import dashboardsRoutes from "@modules/Dashboards/config/routes";
import usersRoutes from "@modules/Users/config/routes";
import switchesRoutes from "@modules/Switches/config/routes";

interface Props {
  children: ReactNode;
}

export const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <Flex>
      <Flex
        padding="4"
        width="64"
        flexDirection="column"
        position="sticky"
        top="0"
        left="0"
        height="100vh"
        background="white"
        zIndex="1"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          paddingBottom="5"
          paddingTop="3"
        >
          <Heading fontSize="2xl">FeatSwitch</Heading>
        </Flex>
        <Divider />
        <VStack flexGrow={1} paddingY="3">
          <Button
            variant="ghost"
            colorScheme="gray"
            leftIcon={<InboxIcon />}
            width="full"
            justifyContent="start"
            to={dashboardsRoutes.home}
            as={NavLink}
            _activeLink={{
              color: "blue.500",
              boxShadow: "none",
            }}
          >
            <FormattedMessage {...messages.activity} />
          </Button>
          <Button
            variant="ghost"
            colorScheme="gray"
            leftIcon={<ToggleIcon />}
            width="full"
            justifyContent="start"
            to={switchesRoutes.manageFullPath}
            as={NavLink}
            _activeLink={{
              color: "blue.500",
              boxShadow: "none",
            }}
          >
            <FormattedMessage {...messages.switches} />
          </Button>
          <Button
            variant="ghost"
            colorScheme="gray"
            leftIcon={<UsersListIcon />}
            width="full"
            justifyContent="start"
            to={usersRoutes.manageFullPath}
            as={NavLink}
            _activeLink={{
              color: "blue.500",
              boxShadow: "none",
            }}
          >
            <FormattedMessage {...messages.users} />
          </Button>
        </VStack>
        <Divider />
        <Box padding="3" paddingTop="5">
          <Flex>
            <Avatar src="https://bit.ly/dan-abramov" marginRight="3" />
            <Box overflow="hidden">
              <Text fontSize="sm" fontWeight="bold" isTruncated>
                Guilherme A.
              </Text>
              <Text fontSize="sm" isTruncated>
                guilherme.andrade.ao@gmail.com
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Box flexGrow={1}>{children}</Box>
    </Flex>
  );
};
