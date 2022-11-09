import React from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "../ui/LoadingSpinner";
import styles from "./Countries.module.css";
import Country from "./Country";

function CountriesList() {
  const { countries, isLoading, error } = useSelector((state) => state);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : error?.response?.data ? (
        <p>No country found</p>
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
