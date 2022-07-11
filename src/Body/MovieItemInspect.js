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
      {movieInspected.map((m) => (<div className="col-xl-3 col-md-4 col-sm-6 mt-5">
      <ItemInspect
      adult = {m.original_title}
      
      />
     
      </div>))}
     
      
    </div>
  );
};

export default MovieItemInspect;
