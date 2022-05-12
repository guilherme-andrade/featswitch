import { FC } from "react";

// UI
import { Box } from "@UI/Components/Box/Box";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@UI/Components/Tabs/Tabs";
import { Skeleton } from "@UI/Components/Skeleton/Skeleton";
import { Flex } from "@UI/Components/Flex/Flex";
import { ConfigureSwitchTab } from "./Tabs/ConfigureSwitchTab/ConfigureSwitchTab";

// Dashboard
import { DashboardContainer } from "@modules/Dashboards/Components/Layouts/DashboardContainer/DashboardContainer";
import { DashboardTitle } from "@modules/Dashboards/Components/Layouts/DashboardTitle/DashboardTitle";

// I18n
import messages from "./messages";
import { FormattedMessage } from "@I18n/Components/FormattedMessage/FormattedMessage";

// DataLayer
import { useDataQuery } from "@Core/hooks/useDataQuery";

import { useParams } from "@Core/hooks/useParams";

export const EditSwitchPage: FC = () => {
  const { switchId } = useParams();
  const { isLoading, data: switchData } = useDataQuery<{
    key: string;
    id: string;
    configurable: boolean;
  }>(["switches", switchId]);

  return (
    <DashboardContainer>
      <Flex justifyContent="between">
        <DashboardTitle>
          {isLoading || !switchData ? (
            <Skeleton />
          ) : (
            <FormattedMessage
              {...messages.manageSwitch}
              values={{ switchKey: switchData.key }}
            />
          )}
        </DashboardTitle>
      </Flex>
      <Box marginY="3" minWidth="full">
        {isLoading ? (
          <Skeleton />
        ) : (
          switchData && (
            <Tabs>
              <TabList marginBottom="5">
                <Tab>
                  <FormattedMessage {...messages.activity} />
                </Tab>
                <Tab>
                  <FormattedMessage {...messages.configure} />
                </Tab>
                <Tab>
                  <FormattedMessage {...messages.settings} />
                </Tab>
              </TabList>

              <TabPanels
                background="white"
                rounded="xl"
                shadow="sm"
                padding="5"
              >
                <TabPanel>
                  <ConfigureSwitchTab switchId={switchId} />
                </TabPanel>
                <TabPanel>
                  <ConfigureSwitchTab switchId={switchId} />
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          )
        )}
      </Box>
    </DashboardContainer>
  );
};
