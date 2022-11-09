import React from "react";

function Country({ country }) {
  return (
    <li>
      <h2>{country.name.common}</h2>
      <img src={country.flags.png} alt="" />
    </li>
  );
}

export default Country;
