const MovieItem = ({ title, overview, image }) => {
  return (
    <div>
      <img className="img-fluid" src={image} />
    </div>
  );
};

export default MovieItem;
