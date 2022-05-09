import { FC } from "react";

// UI
import { Switch } from "@UI/Components/Switch/Switch";
import { Button } from "@UI/Components/Button/Button";
import { Shell } from "@UI/Components/Shell/Shell";
import { Flex } from "@UI/Components/Flex/Flex";
import { ArrowRightIcon } from "@UI/Components/Icons/ArrowRightIcon";

// Dashboard
import { DashboardContainer } from "@modules/Dashboards/Components/Layouts/DashboardContainer/DashboardContainer";
import { DashboardTitle } from "@modules/Dashboards/Components/Layouts/DashboardTitle/DashboardTitle";
import { DashboardSubtitle } from "@modules/Dashboards/Components/Layouts/DashboardSubtitle/DashboardSubtitle";

// I18n
import messages from "./messages";
import { FormattedMessage } from "@I18n/Components/FormattedMessage/FormattedMessage";
import { useI18n } from "@I18n/hooks/useI18n";

// Form
import { useForm } from "@Core/hooks/useForm";
import { FormGroup } from "@Core/Components/FormGroup/FormGroup";

// DataLayer
import { useDataMutation } from "@Core/hooks/useDataMutation";

// Routes
import routes from "../../../config/routes";
import { useNavigate } from "@Core/hooks/useNavigate";

export const AddSwitchPage: FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { formatMessage } = useI18n();
  const { mutate, errors, clearErrors } = useDataMutation("switches");

  const handleSubmitClick = handleSubmit(async (data) => {
    const { key } = data;
    const response = await mutate({ key });
    if (!response.errors) {
      navigate(routes.manageFullPath);
    }
  });

  return (
    <DashboardContainer>
      <DashboardTitle>
        <FormattedMessage {...messages.addSwitch} />
      </DashboardTitle>
      <DashboardSubtitle marginBottom="12">
        <FormattedMessage
          {...messages.creatingASwitchIsEasyAndWillGiveYouThePowerToCreateABTestsLaterOn}
        />
      </DashboardSubtitle>
      <Shell paddingTop="10" paddingBottom="6" minHeight="156" maxWidth="700px">
        <FormGroup
          {...register("key")}
          size="lg"
          autoFocus
          type="text"
          label={formatMessage(messages.key)}
          labelHint={formatMessage(messages.keyCannotContainSpaces)}
          placeholder={formatMessage(messages.exampleFeatureName)}
          isInvalid={!!errors.key}
          errors={errors.key}
          helperText={formatMessage(
            messages.theKeyWillActAsTheMainIdentifierOfYourSwitch
          )}
          _wrapper={{
            marginBottom: "16",
          }}
          clearErrors={clearErrors}
        />
        <FormGroup
          {...register("configurable")}
          size="lg"
          autoFocus
          label={formatMessage(
            messages.wouldYouLikeToAddConfigurationOptionsToYourSwitch
          )}
          helperText={formatMessage(
            messages.switchConfigurationsAreAPowerfulToolThatAllowsYourUsersToSeeDifferentVersionsOfTheSameFeature
          )}
          labelHint={formatMessage(messages.youCanDoThisLater)}
          _wrapper={{
            marginBottom: "16",
            flexDirection: "column",
          }}
          rightLabel={formatMessage(messages.yes)}
          leftLabel={formatMessage(messages.no)}
          as={Switch}
          clearErrors={clearErrors}
        />
        <Flex justifyContent="end">
          <Button
            colorScheme="blue"
            size="lg"
            onClick={handleSubmitClick}
            rightIcon={<ArrowRightIcon />}
          >
            <FormattedMessage {...messages.saveAndContinue} />
          </Button>
        </Flex>
      </Shell>
    </DashboardContainer>
  );
};
