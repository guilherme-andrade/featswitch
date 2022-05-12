import { FC, useState, ChangeEvent } from "react";
import { chakra } from "@chakra-ui/react";
import ReactTextAreaCodeEditor, {
  TextareaCodeEditorProps,
} from "@uiw/react-textarea-code-editor";

const ChakraTextareaCodeEditor = chakra(ReactTextAreaCodeEditor);

interface Props extends TextareaCodeEditorProps {}

export const CodeEditor: FC<Props> = ({ ...props }) => {
  const [code, setCode] = useState(props.defaultValue);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
    props?.onChange(e);
  };

  return (
    <ChakraTextareaCodeEditor value={code} onChange={handleChange} {...props} />
  );
};
