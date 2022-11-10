import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          title: "Countries",
          all: "All Countries",
          search: "Search by Name",
          noFound: "No country found.",
        },
      },
      tr: {
        translation: {
          title: "Ülkeler",
          all: "Bütün Ülkeler",
          search: "İsme Göre Ara",
          noFound: "Hiçbir ülke bulunamadı.",
        },
      },
      de: {
        translation: {
          title: "Länder",
          all: "Alle Länder",
          search: "Suche mit Name",
          noFound: "Kein land gefunden.",
        },
      },
    },
  });
