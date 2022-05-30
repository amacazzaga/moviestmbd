const TelevisionItem = ({ name, overview, image }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} />
      <p>{overview}</p>
    </div>
  );
};

export default TelevisionItem;
