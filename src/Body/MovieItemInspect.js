import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemInspect from "./ItemInspect";

const imgUrl = "https://image.tmdb.org/t/p/original";
const MovieItemInspect = () => {
  const [movieInspected, setMovieInspected] = useState([]);
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
        setMovieInspected([response.data]);
      })
      .catch((e) => {
        console.log(e.error);
      });
  };

  /*return*/

  return (
    <div>
      {movieInspected.map((m) => (
        <ItemInspect
          vote={m.vote_average}
          image={imgUrl + m.poster_path}
          title={m.original_title}
          voteCount={m.vote_count}
          tagline={m.tagline}
          runtime={m.runtime}
          release={m.release_date}
          popularity={m.popularity}
          status={m.status}
          genres={m.genres.map((g)=>(g.name))}
        />
      ))}
    </div>
  );
};

export default MovieItemInspect;
