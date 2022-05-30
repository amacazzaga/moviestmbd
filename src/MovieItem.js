const MovieItem = ({ title, overview, image }) => {
  return (
    <div className="container-movie-item">
      <h5>{title}</h5>
      <img className="img-fluid" src={image} />
    </div>
  );
};

export default MovieItem;
