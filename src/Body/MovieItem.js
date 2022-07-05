const MovieItem = ({ title, overview, image }) => {
  return (
    <div className="card bg-transparent">
    <img src={image} className="card-img-top img-fluid" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{overview}</p>
    </div>
  </div>
  );
};

export default MovieItem;
