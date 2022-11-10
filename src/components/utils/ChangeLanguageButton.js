import React from "react";
import { useTranslation } from "react-i18next";

import styles from "../../assets/styles/ChangeLanguageButton.module.css";

const languages = {
  en: { nativeName: "English", flag: "https://flagcdn.com/w320/gb.png" },
  tr: { nativeName: "Turkish", flag: "https://flagcdn.com/w320/tr.png" },
  de: { nativeName: "German", flag: "https://flagcdn.com/w320/de.png" },
};

function ChangeLanguageButton() {
  const { i18n } = useTranslation();

  return (
    <div className={styles.buttons}>
      {Object.keys(languages).map((language) => (
        <button
          className={styles.change_button}
          type="submit"
          key={language}
          onClick={() => i18n.changeLanguage(language)}
          disabled={i18n.resolvedLanguage === language}
        >
          <img
            src={languages[language].flag}
            alt={languages[language].nativeName}
          />
        </button>
      ))}
    </div>
  );
}

export default ChangeLanguageButton;
