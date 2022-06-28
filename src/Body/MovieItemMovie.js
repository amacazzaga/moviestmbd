import React from "react";
import MovieItem from "./MovieItem";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieItemMovie = () => {
  const [movie, setMovie] = useState();
  const { movies } = useParams();
  const imgUrl = "https://image.tmdb.org/t/p/w780";
  const baseUrl = "https://api.themoviedb.org/3/movie/";
  const movieEndPoint = `${movies}`;
  const apiKey = "api_key=0f0c22bee45b529c07d02b1f2dc14e01";
  const urlMovie = baseUrl + movieEndPoint + "?" + apiKey;
  ////////////////////////////////////////
  const getMoviesByMovie = async (url) => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setMovie(response.data.results);
      })
      .catch((e) => {     
        console.log(e.error);
      });
  };
  /////////////////////////////////////////
  useEffect(() => {
    getMoviesByMovie(urlMovie);
  }, [movieEndPoint]);

  ////////////////////////////////////
  return movie ? (
    movie.map((m) => (
      <div className="col-xl-3 col-md-4 col-sm-6 mt-5  ">
        <MovieItem
          key={m.id}
          id={m.id}
          title={m.title}
          image={imgUrl + m.poster_path}
          overview={m.overview}
        />
      </div>
    ))
  ) : (
    <div className="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );
};

export default MovieItemMovie;
