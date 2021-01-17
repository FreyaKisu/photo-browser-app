const getPhotos = () => {
    return fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => data);
  };

  export default getPhotos;