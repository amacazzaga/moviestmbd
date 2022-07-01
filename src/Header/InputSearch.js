import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const InputSearch = ({ getMoviesByGenre }) => {
  const [inputvalue, setInputValue] = useState();
  const baseUrl = "https://api.themoviedb.org/3/search/movie";
  const apiKey = "api_key=0f0c22bee45b529c07d02b1f2dc14e01";
  const query = `query=${inputvalue}`;
  const urlInput = baseUrl + "?" + apiKey + "&" + query;

  return (
    <form class=" container-md input-search d-flex ">
      <input
        class="outline-secondary m-2 "
        type="text"
        placeholder="Your Movie..."
        id="input"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <Link to={`/search/`}>
        <button
          onClick={() => {
            getMoviesByGenre(urlInput);
          }}
          class="btn-outline-secondary m-2"
          type="submit"
        >
          Search
        </button>
      </Link>
    </form>
  );
};

export default InputSearch;
