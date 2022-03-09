import GoogleMapReact from "google-map-react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { MAP_CLICKED } from "../redux/actionTypes";

//AIzaSyAnzpQmtvD9JK_qcY16unM333WlyIVP6zs

const styles = {
  width: "100%",
  height: "70vh",
};

const GoogleMap = ({ currCoords, onMapClicked, clickedCoords }) => {
  const handleMapClick = (e) => onMapClicked({ lat: e.lat, lng: e.lng });

  return (
    <div style={styles}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAnzpQmtvD9JK_qcY16unM333WlyIVP6zs" }}
        defaultCenter={currCoords}
        center={clickedCoords}
        defaultZoom={14}
        onClick={handleMapClick}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  clickedCoords: state.map.clickedCoords,
});

const mapDispatchToProps = (dispatch) => ({
  onMapClicked: (coords) => dispatch({ type: MAP_CLICKED, payload: coords }),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMap);
