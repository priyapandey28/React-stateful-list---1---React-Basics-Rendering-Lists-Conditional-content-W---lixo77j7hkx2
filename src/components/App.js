import React, { useState } from "react";

import "../styles/App.css";

const data = {
  2018: ["Avengers 1", "Now you see me", "Fast and Furious 7"],
  2019: ["Avengers 2", "Now you see me 2", "Fast and Furious 8"],
  2020: [
    "Final Avengers Movie(Iron man dies)",
    "Now you finally used Lenskart",
    "Covid Came",
  ],
  2021: ["Covid Returns"],
  2022: ["Adventures of Saiman", "Adventures of Shaktiman"],
};
const App = () => {
  const [year, setYear] = useState("");
  const changeYear = (e) => {
    console.log(e.target.value);
    setYear(e.target.value);
  };
  return (
    <div id="main">
      <select name="" id="" onChange={changeYear}>
        <option value={null}></option>
        {Object.keys(data).map((key) => {
          return (
            <option key={key} value={key}>
              {key}
            </option>
          );
        })}
      </select>
      <div id="selected-year">
        {year ? `Selected year-${year}` : "No year selected"}
      </div>
      <ul>
        {year &&
          data[year].map((movie) => {
            return <li key={movie}>{movie}</li>;
          })}
      </ul>
    </div>
  );
};

export default App;
