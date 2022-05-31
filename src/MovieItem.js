const MovieItem = ({ title, overview, image }) => {
  return (
    <div className="container-movie-item">
      <img className="img-fluid" src={image} />
    </div>
  );
};

export default MovieItem;
