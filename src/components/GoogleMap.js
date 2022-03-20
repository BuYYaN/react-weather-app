import { useState } from "react";
import { connect } from "react-redux";
import { CLEAR_WEATHER_DATA, MAP_CLICKED } from "../redux/actionTypes";
import Weather from "../agent";
import Marker from "./Marker";
import GoogleMapReact from "google-map-react";

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const GoogleMap = ({ coords, handleMapClick, clearData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCoords, setCurrentCoords] = useState(coords);

  const handleMapClicked = ({ lng, lat }) => {
    clearData();
    setIsModalOpen(true);
    setCurrentCoords({ lng, lat });
    handleMapClick({ lat, lon: lng });
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: API_KEY }}
      center={currentCoords}
      defaultZoom={14}
      onClick={handleMapClicked}
    >
      {isModalOpen && <Marker setIsModalOpen={setIsModalOpen} />}
    </GoogleMapReact>
  );
};

const mapStateToProps = (state) => ({
  coords: state.map.coords,
});

const mapDispatchToProps = (dispatch) => ({
  handleMapClick: (coords) =>
    dispatch({ type: MAP_CLICKED, payload: Weather.get(coords) }),
  clearData: () => dispatch({ type: CLEAR_WEATHER_DATA }),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMap);
