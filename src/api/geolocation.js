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

export default Geo;
