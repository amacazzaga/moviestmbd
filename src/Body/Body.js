import React from "react";
import MovieItem from "./MovieItem";
import SeriesItem from "./SeriesItem";

const Body = () => {
  return (
    <div className="container-body">
    <div className="container-movies-series">
      <div>
      <div className="container-fluid-movies">
        <MovieItem/>
      </div>
      </div>
      <div>
      <div className="container-fluid-series">
        <SeriesItem/>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Body;
