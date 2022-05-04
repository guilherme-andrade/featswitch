import { IntlShape, createIntlCache, createIntl } from "react-intl";
import translations from "../translations";

interface ExtendedIntlShape extends IntlShape {
  locale: string;
}

export const getLocale = (): string =>
  document.querySelector("html").getAttribute("lang");

const cache = createIntlCache();
const locale = getLocale();

const i18n: ExtendedIntlShape = createIntl(
  {
    locale: locale,
    messages: translations[locale],
  },
  cache
);

i18n.locale = locale;

export default i18n;
