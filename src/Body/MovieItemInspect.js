import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieItem from "./MovieItem";

const imgUrl = "https://image.tmdb.org/t/p/w780";
const MovieItemInspect = () => {
  const [movieInspected, setMovieInspected] = useState();
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=0f0c22bee45b529c07d02b1f2dc14e01&language=en-US`;
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
  useEffect(() => {
    getMoviesByInspect(url);
  }, []);
  return <div></div>;
};

export default MovieItemInspect;
