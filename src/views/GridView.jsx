import React, { useState, useEffect } from "react";
import getPhotos from "../api/getPhotos";
import PhotoGrid from "../components/PhotoGrid";
import "../Global.scss";

function GridView(props) {
  return (
    <>
      <p>Click on a photo for detailed view</p>
      <PhotoGrid {...props} />
    </>
  );
}

export default GridView;
