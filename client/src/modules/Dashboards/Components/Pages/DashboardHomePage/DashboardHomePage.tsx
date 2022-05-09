import { FC } from "react";

// UI
import { Alert, AlertIcon } from "@UI/Components/Alert/Alert";
import { Box } from "@UI/Components/Box/Box";
import { Button } from "@UI/Components/Button/Button";

// Dashboard
import { DashboardContainer } from "../../Layouts/DashboardContainer/DashboardContainer";
import { DashboardTitle } from "../../Layouts/DashboardTitle/DashboardTitle";
import { DashboardSubtitle } from "../../Layouts/DashboardSubtitle/DashboardSubtitle";
import { DashboardTopBar } from "../../Layouts/DashboardTopBar/DashboardTopBar";

// I18n
import messages from "./messages";
import { FormattedMessage } from "@I18n/Components/FormattedMessage/FormattedMessage";

// Router
import { RouterLink } from "@Core/Components/RouterLink/RouterLink";
import switchesRoutes from "@modules/Switches/config/routes";

export const DashboardHomePage: FC = () => {
  return (
    <Box width="full">
      <DashboardTopBar>
        <FormattedMessage {...messages.yourAccountHasNotBeenVerified} />
      </DashboardTopBar>
      <DashboardContainer>
        <DashboardTitle>
          <FormattedMessage {...messages.recentActivity} />
        </DashboardTitle>
        <DashboardSubtitle>
          <FormattedMessage
            {...messages.hereYouCanViewRecentEventsTriggeredByYourConnectedApplications}
          />
        </DashboardSubtitle>
        <Box marginY="3">
          <Alert colorScheme="blue" variant="left-accent" width="fit-content">
            <AlertIcon />
            <FormattedMessage {...messages.yourAppHasNoSwitchesYet} />
            <Button
              as={RouterLink}
              variant="link"
              to={switchesRoutes.addFullPath}
              colorScheme="blue"
              marginLeft="2"
            >
              <FormattedMessage {...messages.addASwitch} />
            </Button>
          </Alert>
        </Box>
      </DashboardContainer>
    </Box>
  );
};
