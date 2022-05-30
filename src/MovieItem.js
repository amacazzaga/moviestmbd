const MovieItem = ({ title, overview, image }) => {
  return (
    <div>
      <h4>{title}</h4>
      <img className="img-fluid" src={image} />
      <p>{overview}</p>
    </div>
  );
};

export default MovieItem;
