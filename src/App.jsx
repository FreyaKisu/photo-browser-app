import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./Global.scss";
import PhotoGrid from "./components/PhotoGrid";
import Photo from "./components/Photo";

const getPhotos = () => {
  return fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => data);
};

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    console.log("APP MOUNT");
    getPhotos().then((r) => {
      const firstAlbum = r.filter((photo) => photo.albumId === 1);
      setPhotos(firstAlbum);
    });
  }, []);
  return (
    <div className="photo-app">
      <header>
        <h1>Photo Browser</h1>
      </header>

      <Router>
        <Switch>
          <Route exact path="/">
            <PhotoGrid photos={photos} />
          </Route>

          <Route
            path="/photo/:id"
            render={(props) => <Photo {...props} photos={photos} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
