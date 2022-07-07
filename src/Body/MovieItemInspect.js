import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemInspect from "./ItemInspect";

const imgUrl = "https://image.tmdb.org/t/p/w780";
const MovieItemInspect = () => {
  const [movieInspected, setMovieInspected] = useState([]);
  const { id } = useParams();
  const baseUrl = `https://api.themoviedb.org/3/movie/${id}`;
  const apiKey = `api_key=0f0c22bee45b529c07d02b1f2dc14e01`;
  const url = baseUrl + `?` + apiKey;
  useEffect(() => {
    getMoviesByInspect(url);
    console.log(movieInspected);
  }, []);
  const getMoviesByInspect = (url) => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setMovieInspected(response.data);
      })
      .catch((e) => {
        console.log(e.error);
      });
  };
 
  /*return*/
  return <div></div>;
};

export default MovieItemInspect;
