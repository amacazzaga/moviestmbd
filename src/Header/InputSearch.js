import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const InputSearch = ({ getMoviesByGenre }) => {
  const baseUrl = "https://api.themoviedb.org/3/search/movie";
  const apiKey = "api_key=0f0c22bee45b529c07d02b1f2dc14e01";
  const query = "query=avengers";
  const urlInput = baseUrl + "?" + apiKey + "&" + query;
  useEffect(() => {
    getMoviesByGenre(urlInput);
  }, []);
  return (
    <form class=" container-md input-search d-flex ">
      <input
        class="outline-secondary m-2 "
        type="search"
        placeholder="Your Movie..."
      ></input>
      <Link to={`/search/`}>
        <button class="btn-outline-secondary m-2" type="submit">
          Search
        </button>
      </Link>
    </form>
  );
};

export default InputSearch;
