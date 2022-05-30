const TelevisionItem = ({ name, overview, image }) => {
  return (
    <div>
      <h5>{name}</h5>
      <img src={image} />

    </div>
  );
};

export default TelevisionItem;
