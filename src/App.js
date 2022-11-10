import "./assets/styles/App.css";
import { useDispatch } from "react-redux";
import { getCountries, getCountriesByName } from "./store/actions";
import CountriesList from "./components/Countries/CountriesList";
import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";

function App() {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const firstUpdate = useRef(true);

  const getAllHandler = () => {
    setSearchInput("");
  };
  const searchHandler = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

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
      <h1>COUNTRIES</h1>
      <div className="search-countries">
        <button
          className={searchInput === "" ? "active" : ""}
          disabled={searchInput === "" ? true : false}
          onClick={getAllHandler}
        >
          All Countries
        </button>
        <input
          value={searchInput}
          type="search"
          placeholder="Search by Name"
          onChange={searchHandler}
        />
      </div>
      <CountriesList />
    </div>
  );
}

export default App;
