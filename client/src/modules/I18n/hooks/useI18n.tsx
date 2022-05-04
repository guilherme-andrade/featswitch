import { useContext } from "react";

import { useIntl } from "react-intl";
import I18nContext from "@I18n/Contexts/I18nContext";

export const useI18n = () => {
  const i18n = useIntl();
  const { changeLocale } = useContext(I18nContext);

  return {
    ...i18n,
    changeLocale,
  };
};
