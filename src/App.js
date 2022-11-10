import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { getCountries, getCountriesByName } from "./store/actions";
import { useTranslation } from "react-i18next";

import CountriesList from "./components/Countries/CountriesList";
import "./assets/styles/App.css";
import ChangeLanguageButton from "./components/utils/ChangeLanguageButton";

function App() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  const getAllHandler = () => {
    setSearchInput("");
  };
  const searchHandler = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchInput.length) {
        dispatch(getCountriesByName(searchInput));
      } else {
        dispatch(getCountries());
      }
    }, 500);
    return () => clearTimeout(debounce);
  }, [searchInput]);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Countries with redux-thunk</title>
        <meta name="description" content="Countries with redux-thunk" />
      </Helmet>
      <nav>
        <ChangeLanguageButton />
      </nav>
      <h1>{t("title")}</h1>
      <div className="search-countries">
        <button
          className={searchInput === "" ? "active" : ""}
          disabled={searchInput === "" ? true : false}
          onClick={getAllHandler}
        >
          {t("all")}
        </button>
        <input
          value={searchInput}
          type="search"
          placeholder={t("search")}
          onChange={searchHandler}
        />
      </div>
      <CountriesList />
    </div>
  );
}

export default App;
