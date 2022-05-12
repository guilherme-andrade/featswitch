import { FC } from "react";

// UI
import { Alert, AlertIcon } from "@UI/Components/Alert/Alert";
import { Box } from "@UI/Components/Box/Box";
import { Button } from "@UI/Components/Button/Button";
import { Code } from "@UI/Components/Code/Code";
import { Switch } from "@UI/Components/Switch/Switch";
import { FormGroup } from "@Core/Components/FormGroup/FormGroup";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@UI/Components/Table/Table";

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

// DataLayer
import { useDataQuery } from "@Core/hooks/useDataQuery";

import { isEmpty } from "lodash";
import { useI18n } from "@I18n/hooks/useI18n";
import { useNavigate } from "@Core/hooks/useNavigate";

export const ManageSwitchesPage: FC = () => {
  const { formatMessage } = useI18n();
  const navigate = useNavigate();
  const { isLoading, data: switches } =
    useDataQuery<{ key: string; id: string; configurable: boolean }[]>(
      "switches"
    );

  const handleRowClick =
    (id: string) => (e: React.MouseEvent<HTMLTableRowElement>) => {
      console.log(e);
      navigate(switchesRoutes.editFullPath, { switchId: id });
    };

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
      <Box marginY="3" minWidth="full">
        {isLoading || isEmpty(switches) ? (
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
        ) : (
          <TableContainer background="white" rounded="xl">
            <Table>
              <Thead>
                <Tr>
                  <Th>
                    <FormattedMessage {...messages.key} />
                  </Th>
                  <Th textAlign="right">
                    <FormattedMessage {...messages.toggle} />
                  </Th>
                </Tr>
              </Thead>

              <Tbody>
                {switches.map((switchItem) => (
                  <Tr
                    key={switchItem.id}
                    clickable
                    onClick={handleRowClick(switchItem.id)}
                  >
                    <Td>
                      <Code>{switchItem.key}</Code>
                    </Td>
                    <Td textAlign="right">
                      <FormGroup
                        size="lg"
                        autoFocus
                        as={Switch}
                        justifyContent="end"
                        onLabel={formatMessage(messages.on)}
                        offLabel={formatMessage(messages.off)}
                        _input_wrapper={{
                          justifyContent: "end",
                        }}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </DashboardContainer>
  );
};
