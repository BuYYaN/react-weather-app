const Geo = {
  _isSupported: () => !!navigator.geolocation,
  getCurrentCoords: (onSuccess) => {
    if (!Geo._isSupported()) return null;

    navigator.geolocation.getCurrentPosition(({ coords }) => {
      onSuccess({
        lat: coords.latitude,
        lng: coords.longitude,
      });
    });
  },
};

export default Geo;
