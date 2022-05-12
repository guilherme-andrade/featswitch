import { FC } from "react";

import { forwardRef } from "@chakra-ui/react";

import { IApiError } from "@Core/services/jsonApi";

import { HStack } from "@UI/Components/HStack/HStack";
import { Text } from "@UI/Components/Text/Text";
import { Tooltip } from "@UI/Components/Tooltip/Tooltip";
import { FormLabel } from "@UI/Components/FormLabel/FormLabel";
import { FormControl } from "@UI/Components/FormControl/FormControl";
import type { FormControlProps } from "@UI/Components/FormControl/FormControl";
import { FormHelperText } from "@UI/Components/FormHelperText/FormHelperText";
import { Icon } from "@UI/Components/Icon/Icon";
import { InputGroup } from "@UI/Components/InputGroup/InputGroup";
import { InputRightElement } from "@UI/Components/InputRightElement/InputRightElement";
import { InfoCircleIcon } from "@UI/Components/Icons/InfoCircleIcon";
import { Input } from "@UI/Components/Input/Input";
import { Switch } from "@UI/Components/Switch/Switch";
import type { InputProps } from "@UI/Components/Input/Input";
import type { SwitchProps } from "@UI/Components/Switch/Switch";

import messages from "./messages";
import { FormattedMessage } from "@I18n/Components/FormattedMessage/FormattedMessage";

interface Props extends InputProps {
  label?: string;
  helperText?: string;
  labelHint?: string;
  _wrapper?: FormControlProps;
  _input_wrapper?: FormControlProps;
  leftLabel?: string;
  rightLabel?: string;
  errors?: IApiError[];
  clearErrors?: () => void;
  onLabel?: SwitchProps["onLabel"];
  offLabel?: SwitchProps["offLabel"];
}

const labelFontSizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
};

export const FormGroup: FC<Props> = forwardRef<Props, "input">(
  (
    {
      label,
      helperText,
      labelHint,
      _wrapper,
      _input_wrapper,
      as,
      leftLabel,
      rightLabel,
      errors,
      onChange,
      clearErrors,
      ...props
    },
    ref
  ) => {
    const FinalInput = as || Input;
    const isASwitch = FinalInput === Switch;
    const direction = isASwitch ? "row" : "column";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e);
      clearErrors && clearErrors();
    };

    return (
      <FormControl
        isInvalid={props.isInvalid}
        display="flex"
        flexDirection={direction}
        {..._wrapper}
      >
        {label && (
          <FormLabel
            display="flex"
            alignItems="center"
            fontSize={labelFontSizes[props.size]}
            htmlFor={props.name}
            marginRight={direction === "row" ? "4" : null}
          >
            <Text as="span">{label}</Text>
            {labelHint && (
              <Tooltip label={labelHint}>
                <Text as="span" marginLeft="1">
                  <Icon as={InfoCircleIcon} />
                </Text>
              </Tooltip>
            )}
          </FormLabel>
        )}
        {helperText && isASwitch && (
          <FormHelperText marginBottom="4" marginTop="0">
            {helperText}
          </FormHelperText>
        )}
        <InputGroup>
          <HStack spacing="2" width="100%" {..._input_wrapper}>
            {leftLabel && <Text>{leftLabel}</Text>}
            <FinalInput {...props} onChange={handleChange} ref={ref} />
            {rightLabel && <Text>{rightLabel}</Text>}
          </HStack>
          {errors && (
            <InputRightElement height="100%">
              <Icon as={InfoCircleIcon} color="red.600" width="5" height="5" />
            </InputRightElement>
          )}
        </InputGroup>
        {errors
          ? errors.map((error, index) => (
              <FormHelperText color="red.600" key={`${error.field}-${index}`}>
                <FormattedMessage {...messages[error.message]} values={error} />
              </FormHelperText>
            ))
          : helperText &&
            !isASwitch && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
);
