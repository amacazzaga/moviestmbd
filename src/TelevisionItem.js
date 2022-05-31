const TelevisionItem = ({ name, overview, image }) => {
  return (
    <div>
      <img className="img-fluid" src={image} />
    </div>
  );
};

export default TelevisionItem;
