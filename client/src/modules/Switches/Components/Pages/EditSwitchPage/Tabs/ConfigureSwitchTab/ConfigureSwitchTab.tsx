import { FC } from "react";

import { useDataQuery } from "@Core/hooks/useDataQuery";
import { Heading } from "@UI/Components/Heading/Heading";
import { Text } from "@UI/Components/Text/Text";
import { FormattedMessage } from "@I18n/Components/FormattedMessage/FormattedMessage";
import { Box } from "@UI/Components/Box/Box";
import { Grid, GridItem } from "@UI/Components/Grid/Grid";
import { CodeEditor } from "@UI/Components/CodeEditor/CodeEditor";

import messages from "./messages";

interface Props {
  switchId: string;
}

export const ConfigureSwitchTab: FC<Props> = ({ switchId }) => {
  const { isLoading, data: switchData } = useDataQuery<{
    key: string;
    id: string;
    configurable: boolean;
  }>(["switches", switchId]);

  const baseJson = `{
    "type": "object",
    "properties": {
      // ...
    },
    "required": [
      // ...
    ]
  }`;

  return (
    <Grid templateColumns="1fr 1fr">
      <GridItem>
        <Box>
          <Heading fontSize="md">
            <FormattedMessage {...messages.configurationJson} />
          </Heading>
        </Box>
        <Box>
          <CodeEditor language="json" defaultValue={baseJson} />
        </Box>
      </GridItem>
      <GridItem>
        <Text
          textTransform="uppercase"
          fontSize="xs"
          fontWeight="bold"
          marginBottom="3"
        >
          <FormattedMessage {...messages.formPreview} />
        </Text>
        <Box border="1px" rounded="xl" borderColor="gray.100" padding="5">
          asdasd
        </Box>
      </GridItem>
    </Grid>
  );
};
