import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import LoadingSpinner from "../utils/LoadingSpinner";
import styles from "../../assets/styles/Countries.module.css";
import Country from "./Country";

function CountriesList() {
  const { t } = useTranslation();
  const { countries, isLoading, error } = useSelector((state) => state);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : error?.response?.data ? (
        <p>{t("noFound")}</p>
      ) : (
        <ul className={styles.countries}>
          {countries.map((country, i) => {
            return <Country key={i} country={country} />;
          })}
        </ul>
      )}
    </>
  );
}

export default CountriesList;
