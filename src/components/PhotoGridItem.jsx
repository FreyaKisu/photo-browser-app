import { Link } from "react-router-dom";
import "../Global.scss";

function PhotoGridItem({ data }) {
  const { thumbnailUrl, title, id } = data;

  const photoUrl = `/photo/${id}`;

  return (
    <li className="thumbnail">
      <Link to={photoUrl}>
        <img src={thumbnailUrl} alt={title} />
      </Link>
    </li>
  );
}

export default PhotoGridItem;
