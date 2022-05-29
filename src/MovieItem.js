const MovieItem = ({ title, overview, image}) => {
 

  return (
    <div>
      <h2>{title}</h2>
     <img className="img-fluid"  src ={image}/>
      <p>{overview}</p>
    </div>
  );
};

export default MovieItem;
