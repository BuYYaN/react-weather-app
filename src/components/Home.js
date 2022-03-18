import { useEffect } from "react";
import { connect } from "react-redux";
import { MAP_LOADED } from "../redux/actionTypes";
import { CircularProgress } from "@mui/material";
import GoogleMap from "./GoogleMap";
import Geo from "../api/geolocation";
import styles from "./styles";

const Home = ({ currCoords, onCoordsFetched }) => {
  useEffect(() => {
    if (!currCoords) {
      Geo.getCurrentCoords(onCoordsFetched);
    }
  }, [onCoordsFetched, currCoords]);

  return (
    <div style={styles.ctn}>
      {currCoords ? (
        <GoogleMap currCoords={currCoords} />
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currCoords: state.map.currCoords,
});

const mapDispatchToProps = (dispatch) => ({
  onCoordsFetched: (coords) => dispatch({ type: MAP_LOADED, payload: coords }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
