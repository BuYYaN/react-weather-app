import GoogleMapReact from "google-map-react";
import { connect } from "react-redux";
import Weather from "../agent";
import { MAP_CLICKED, UPDATE_HISTORY } from "../redux/actionTypes";
import Marker from "./Marker";

//AIzaSyAnzpQmtvD9JK_qcY16unM333WlyIVP6zs

const styles = {
  width: "100%",
  height: "70vh",
};

const GoogleMap = ({
  currCoords,
  onMapClicked,
  onDataFetched,
  currentWeatherData,
  weatherHistory,
}) => {
  const handleMapClick = async (e) => {
    onMapClicked({ lng: e.lng, lat: e.lat });

    const { data } = await Weather.get(e.lng, e.lat);

    onDataFetched(data);
  };

  return (
    <div style={styles}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAnzpQmtvD9JK_qcY16unM333WlyIVP6zs" }}
        center={currCoords}
        defaultZoom={14}
        onClick={handleMapClick}
      >
        {weatherHistory.length > 0 && (
          <Marker
            weatherData={currentWeatherData}
            lat={currCoords.lat}
            lng={currCoords.lng}
          />
        )}
      </GoogleMapReact>
    </div>
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
