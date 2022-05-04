import { useState } from "react";
import { IntlProvider } from "react-intl";

import I18nContext from "../I18nContext";
import i18n from "../../services/i18n";

export const I18nProvider = ({ children }) => {
  const [locale, setLocale] = useState(i18n.locale);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
  };

  const handleError = (error: Error) => {
    if (process.env.NODE_ENV === "development") {
      console.warn(error);
    } else {
      console.error(error);
    }
  };

  return (
    <I18nContext.Provider value={{ locale, changeLocale }}>
      <IntlProvider
        locale={locale}
        messages={i18n.messages}
        onError={handleError}
      >
        {children}
      </IntlProvider>
    </I18nContext.Provider>
  );
};
