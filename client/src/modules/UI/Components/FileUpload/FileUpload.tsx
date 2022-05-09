import { useRef, FC, ReactNode } from "react";

import { forwardRef } from "@chakra-ui/react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { FormControl } from "../FormControl/FormControl";
import { FormLabel } from "../FormLabel/FormLabel";
import { InputProps } from "../Input/Input";
import { InputGroup } from "../InputGroup/InputGroup";
import { Icon } from "../Icon/Icon";
import { FormErrorMessage } from "../FormErrorMessage/FormErrorMessage";
import { InputLeftElement } from "../InputLeftElement/InputLeftElement";
import { FiFile } from "react-icons/fi";
import { useController } from "react-hook-form";
import { useForm, UseFormRegisterReturn } from "react-hook-form";

interface FileUploadProps extends UseFormRegisterReturn {
  accept?: string;
  multiple?: boolean;
  children?: ReactNode;
}

export const FileUpload: FC<FileUploadProps> = forwardRef(
  ({ accept, multiple, children, ...register }, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => inputRef.current?.click();

    return (
      <InputGroup onClick={handleClick}>
        <input
          type="file"
          multiple={multiple || false}
          hidden
          accept={accept}
          {...register}
        />
        <>{children}</>
      </InputGroup>
    );
  }
);
