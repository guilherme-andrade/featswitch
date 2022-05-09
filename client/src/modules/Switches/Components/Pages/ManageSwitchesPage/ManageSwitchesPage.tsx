import { FC } from "react";

// UI
import { Alert, AlertIcon } from "@UI/Components/Alert/Alert";
import { Box } from "@UI/Components/Box/Box";
import { Button } from "@UI/Components/Button/Button";

// Dashboard
import { DashboardContainer } from "@modules/Dashboards/Components/Layouts/DashboardContainer/DashboardContainer";
import { DashboardTitle } from "@modules/Dashboards/Components/Layouts/DashboardTitle/DashboardTitle";
import { DashboardSubtitle } from "@modules/Dashboards/Components/Layouts/DashboardSubtitle/DashboardSubtitle";

// I18n
import messages from "./messages";
import { FormattedMessage } from "@I18n/Components/FormattedMessage/FormattedMessage";

// Router
import { RouterLink } from "@Core/Components/RouterLink/RouterLink";
import switchesRoutes from "@modules/Switches/config/routes";

export const ManageSwitchesPage: FC = () => {
  return (
    <DashboardContainer>
      <DashboardTitle>
        <FormattedMessage {...messages.manageSwitches} />
      </DashboardTitle>
      <DashboardSubtitle>
        <FormattedMessage
          {...messages.hereYouCanManageConfigureAndAddABTestingRulesToAllYourSwitches}
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
  );
};
