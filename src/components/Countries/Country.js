import React from "react";
import { useTranslation } from "react-i18next";

function Country({ country }) {
  const { i18n } = useTranslation();
  return (
    <li>
      <h2>
        {i18n.language === "tr"
          ? country.translations.tur.common
          : i18n.language === "de"
          ? country.translations.deu.common
          : country.name.common}
      </h2>
      <img src={country.flags.png} alt="" />
    </li>
  );
}

export default Country;
