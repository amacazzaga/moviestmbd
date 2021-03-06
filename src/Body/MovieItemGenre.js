import React from "react";
import MovieItem from "./MovieItem";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
//////////////////////////////////
const MovieItemGenre = ({ genremovie, getMoviesByGenre, loading }) => {
  const { id } = useParams();
  const genreEndPoint = `with_genres=${id}&sort_by=vote_average.desc&vote_count.gte=300`;
  const imgUrl = "https://image.tmdb.org/t/p/w780";
  const baseUrl = "https://api.themoviedb.org/3/discover";
  const apiKey = "api_key=0f0c22bee45b529c07d02b1f2dc14e01";
  const urlGenre = baseUrl + "/movie?" + genreEndPoint + "&" + apiKey;
  ////////////////////////////////////////
  useEffect(() => {
    getMoviesByGenre(urlGenre);
  }, [genreEndPoint]);
  ////////////////////////////////////
  return loading != true ? (
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
    <div className="vh" role="status">
      <span class="vh">Loading...</span>
    </div>
  );
};

export default MovieItemGenre;
