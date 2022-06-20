import React from "react";
import MovieItem from "./MovieItem";
import { useEffect } from "react";

const MovieItemAction = ({ genremovie, getMoviesByGenre }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w780";
  const baseUrl = "https://api.themoviedb.org/3/discover";
  const genreActionEndPoint =
    "with_genres=28&sort_by=vote_average.desc&vote_count.gte=300";
  const apiKey = "api_key=0f0c22bee45b529c07d02b1f2dc14e01";
  const urlGenreAction =
    baseUrl + "/movie?" + genreActionEndPoint + "&" + apiKey;

  useEffect(() => {
    getMoviesByGenre(urlGenreAction);
  }, []);
  return genremovie ? (
    genremovie.map((m) => (
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

export default MovieItemAction;
