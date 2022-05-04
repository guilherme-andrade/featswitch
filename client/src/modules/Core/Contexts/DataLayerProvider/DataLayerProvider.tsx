import { FC, ReactNode, useMemo } from "react";
import { ApiClient, ApiProvider } from "jsonapi-react";

interface Props {
  children: ReactNode;
  schema?: object;
  url?: string;
}

export const DataLayerProvider: FC<Props> = ({ children, schema, url }) => {
  const client = useMemo(() => {
    return new ApiClient({
      url,
      schema,
    });
  }, [schema, url]);

  return <ApiProvider client={client}>{children}</ApiProvider>;
};
