import { createContext } from "react";

import i18n from "../services/i18n";

const I18nContext = createContext<{
  locale: string;
  changeLocale: (locale: string) => void;
}>({
  locale: i18n.locale,
  changeLocale: () => undefined,
});

export default I18nContext;
