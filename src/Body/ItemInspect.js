import React from "react";

const ItemInspect = ({
  vote,
  image,
  title,
  voteCount,
  tagline,
  runtime,
  released,
  popularity,
  genres,
  status,
  spokenLanguages,
}) => {
  return (
    <div className="container-sm  px-1 pt-3 pb-3">
      <div className="row d-flex">
        <div className="col-sm-12 col-lg-6 px-1">
          <div className="container px-1">
            <h1 className="m-2">{title}</h1>
            <img className="img-fluid" src={image}></img>
            <h2 className="m-1">{tagline}</h2>
            <div className="col-lg-6">
              <div className="m-2">
                <h3>Status: {status}</h3>
                <h3>
                  Rated with: {vote}, From {voteCount} Votes
                </h3>
                <h3>This Movie Lasts : {runtime} Minutes</h3>
                <h3>Released On : {released}</h3>
                <h3>Popularity : {popularity}</h3>
                <h3>Main Genres: {genres}</h3>
                <h3>Spoken Languages: {spokenLanguages}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInspect;
