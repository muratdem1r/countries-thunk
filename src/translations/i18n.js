import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { trLanguage } from "./tr.js";
import { enLanguage } from "./en.js";
import { deLanguage } from "./de.js";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    resources: {
      en: { translation: { ...enLanguage } },
      tr: { translation: { ...trLanguage } },
      de: { translation: { ...deLanguage } },
    },
  });
