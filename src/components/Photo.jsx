import { Link } from "react-router-dom";

function Photo({ match, photos }) {
  if (!photos.length) return <div>Loading...</div>;
  const { params } = match;

  if (!params) return <div>ID not found</div>;
  const { id } = params;

  if (!id) return <div>ID not found</div>;

  const photo = photos.find((p) => {
    return parseInt(p.id) === parseInt(id);
  });

  return (
    <div>
      
        <Link className="home-link" to="/">
          <span>Home</span>
        </Link>
        <div className="details-container">
        <h2>Title: {photo.title}</h2>
        <img src={photo.url} alt={photo.title} />
      </div>
    </div>
  );
}

export default Photo;
