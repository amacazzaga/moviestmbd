import React from "react";
import MovieItem from "./MovieItem";

const imgUrl = "https://image.tmdb.org/t/p/original";

const MovieItemHome = ({ loading, popularmovie }) => {
  return loading != true ? (
    popularmovie.map((m) => (
      
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

export default MovieItemHome;
