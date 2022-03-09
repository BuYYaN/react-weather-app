const Geo = {
  _isSupported: () => Boolean(navigator.geolocation),
  getCurrentCoords: (success) => {
    if (Geo._isSupported()) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        success({
          lat: coords.latitude,
          lng: coords.longitude,
        });
      });
    } else {
      console.error("Something goes wrong!");
    }
  },
};

// getCurrPosition: () =>
//   navigator.geolocation.getCurrentPosition(({ coords }) => {
//     console.log(coords);
//   }, Geo.displayError),
// getCurrCoords: ({ coords }) => {
//   console.log(
//     Geo.getCurrPosition((pos) => console.log(pos), this.displayError)
//   );
// },
export default Geo;
