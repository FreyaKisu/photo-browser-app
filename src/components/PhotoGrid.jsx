import "../Global.css";
import PhotoGridItem from "./PhotoGridItem";

function PhotoGrid({ photos }) {
  return (
    <div className="photo-grid-wrapper">
      <ul className="photo-grid">
        {photos.map((photo, k) => {
          const key = "photo-" + k;
          return <PhotoGridItem data={photo} key={key} />;
        })}
      </ul>
    </div>
  );
}

export default PhotoGrid;
