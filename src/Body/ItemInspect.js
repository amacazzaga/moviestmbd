import React from "react";

const ItemInspect = ({
  vote,
  image,
  title,
  voteCount,
  tagline,
  runtime,
  release,
  popularity,
  genres,
  status
}) => {
  return (
    <div className="container-sm  px-1 pt-3 pb-3">
      <h1 className="m-2">{title}</h1>
      <div className="row d-flex">
        <div className="col-sm-12 col-lg-6 px-1">
          <div className="container px-1">
            <img className="img-fluid" src={image}></img>
            <h2 className="m-1">{tagline}</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="m-2">
            <h3>
              rated with: {vote}, from {voteCount} votes
            </h3>
            <h3>this movie lasts : {runtime} minutes</h3>
            <h3>release on {release}</h3>
            <h3>popularity : {popularity}</h3>
            <h3>{genres}</h3>
            <h3>status: {status}</h3>
            {console.log(genres)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInspect;
