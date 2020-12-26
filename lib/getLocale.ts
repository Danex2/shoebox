import en from "../translations/en";
import fr from "../translations/fr";
import ko from "../translations/ko";

const locales = {
  en: en,
  fr: fr,
  ko: ko,
};

export function getLocale(locale: string) {
  return locales[locale];
}
