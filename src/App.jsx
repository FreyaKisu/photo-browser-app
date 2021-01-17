import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./Global.scss";
import GridView from "./views/GridView"
import DetailView from "./views/DetailView"
import getPhotos from "./api/getPhotos"

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos().then((r) => {
      const firstAlbum = r.filter((photo) => photo.albumId === 1);
      setPhotos(firstAlbum);
    });
  }, []);
  
  return (
    <div className="photo-app">
       <header>
       <div className ="text-container">
     <div className="sign">
      <span className="fast-flicker">Pho</span>to<span className="flicker">Bro</span>wser
    </div></div>
      </header>

      <Router>
        <Switch>
          <Route exact path="/">
          <GridView photos={photos}/>
          </Route>

          <Route
            path="/photo/:id"
            render={(props) => <DetailView {...props} photos={photos} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
