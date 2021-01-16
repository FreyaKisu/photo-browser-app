import { Link } from "react-router-dom";
import "../Global.css";

function PhotoGridItem({ data }) {
  //console.log(data);
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
