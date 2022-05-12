import { useState, FC } from "react";
import { Switch as ChakraSwitch } from "@chakra-ui/switch";
import type { SwitchProps as ChakraSwitchProps } from "@chakra-ui/switch";

export interface SwitchProps extends ChakraSwitchProps {
  onLabel?: string;
  offLabel?: string;
}

export const Switch: FC<Props> = ({ onLabel, offLabel, ...props }) => {
  const [checked, setChecked] = useState<boolean>(props.isChecked);
  const label = (checked ? onLabel : offLabel) || "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    props.onChange && props.onChange(e);
  };

  return (
    <ChakraSwitch
      {...props}
      isChecked={checked}
      onChange={handleChange}
      position="relative"
      _after={{
        content: `"${label}"`,
        position: "absolute",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: "10px",
        letterSpacing: "-.2px",
        lineHeight: "10px",
        top: "calc(50% - 5px)",
        right: checked ? "auto" : "3px",
        left: checked ? "5px" : "auto",
        color: checked ? "white" : "gray.500",
      }}
    />
  );
};
