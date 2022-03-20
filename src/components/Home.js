import { useEffect } from "react";
import { connect } from "react-redux";
import { MAP_LOADED } from "../redux/actionTypes";
import { CircularProgress } from "@mui/material";
import GoogleMap from "./GoogleMap";
import Geo from "../api/geolocation";
import styles from "./styles";

const Home = ({ coords, handleCoordsFetched }) => {
  useEffect(() => {
    if (coords) return;

    Geo.getCurrentCoords(handleCoordsFetched);
  }, [handleCoordsFetched, coords]);

  return (
    <div style={styles.ctn}>
      {coords ? <GoogleMap /> : <CircularProgress />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  coords: state.map.coords,
});

const mapDispatchToProps = (dispatch) => ({
  handleCoordsFetched: (coords) =>
    dispatch({ type: MAP_LOADED, payload: coords }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
