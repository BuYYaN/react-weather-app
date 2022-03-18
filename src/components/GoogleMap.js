import { useState } from "react";
import { connect } from "react-redux";
import { MAP_CLICKED, UPDATE_HISTORY } from "../redux/actionTypes";
import Weather from "../agent";
import Marker from "./Marker";
import GoogleMapReact from "google-map-react";

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const GoogleMap = ({
  currCoords,
  onMapClicked,
  onDataFetched,
  currentWeatherData,
  weatherHistory,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMapClick = async (e) => {
    setIsModalOpen(true);
    onMapClicked({ lng: e.lng, lat: e.lat });

    const { data } = await Weather.get({ lon: e.lng, lat: e.lat });

    onDataFetched(data);
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: API_KEY }}
      center={currCoords}
      defaultZoom={14}
      onClick={handleMapClick}
    >
      {isModalOpen && (
        <Marker
          setIsModalOpen={setIsModalOpen}
          weatherData={currentWeatherData}
        />
      )}
    </GoogleMapReact>
  );
};

const mapStateToProps = (state) => ({
  currCoords: state.map.currCoords,
  weatherHistory: state.map.weatherHistory,
  currentWeatherData: state.map.currentWeatherData,
});

const mapDispatchToProps = (dispatch) => ({
  onMapClicked: (coords) => dispatch({ type: MAP_CLICKED, payload: coords }),
  onDataFetched: (data) => dispatch({ type: UPDATE_HISTORY, payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMap);
