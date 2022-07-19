import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemInspect from "./ItemInspect";

const imgUrl = "https://image.tmdb.org/t/p/original";
const MovieItemInspect = () => {
  const [movieInspected, setMovieInspected] = useState();
  const { id } = useParams();
  const baseUrl = `https://api.themoviedb.org/3/movie/${id}`;
  const apiKey = `api_key=0f0c22bee45b529c07d02b1f2dc14e01`;
  const url = baseUrl + `?` + apiKey;
  useEffect(() => {
    getMoviesByInspect(url);
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
  return (
    <div>
      {movieInspected && (
        <ItemInspect
          status={movieInspected.status}
          vote={movieInspected.vote_average}
          image={imgUrl + movieInspected.poster_path}
          title={movieInspected.original_title}
          voteCount={movieInspected.vote_count}
          tagline={movieInspected.tagline}
          runtime={movieInspected.runtime}
          released={movieInspected.release_date}
          popularity={movieInspected.popularity}
          genres={movieInspected.genres.map((g) => g.name + ", ")}
          spokenLanguages={movieInspected.spoken_languages.map(
            (s) => s.english_name + ", "
          )}
        />
      )}
    </div>
  );
};

export default MovieItemInspect;
