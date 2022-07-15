import React from "react";
import TelevisionItem from "./TelevisionItem";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TelevisionItemTelevision = () => {
  const [television, setTelevision] = useState();
  const { ontv } = useParams();
  const imgUrl = "https://image.tmdb.org/t/p/original";
  const baseUrl = "https://api.themoviedb.org/3/tv/";
  const televisionEndPoint = `${ontv}`;
  const apiKey = "api_key=0f0c22bee45b529c07d02b1f2dc14e01";
  const urlMovie = baseUrl + televisionEndPoint + "?" + apiKey;
  ////////////////////////////////////////
  const getMoviesByMovie = async (url) => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setTelevision(response.data.results);
      })
      .catch((e) => {
        console.log(e.error);
      });
  };
  useEffect(() => {
    getMoviesByMovie(urlMovie);
  }, [televisionEndPoint]);
  return television ? (
    television.map((m) => (
      <div className="col-xl-3 col-md-4 col-sm-6 mt-5  ">
        <TelevisionItem
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
      <span class="visually-hidden">Loading...</span>
    </div>
  );
};

export default TelevisionItemTelevision;
