import { useEffect } from "react";
import { connect } from "react-redux";
import Geo from "../api/geolocation";
import { MAP_LOADED } from "../redux/actionTypes";
import GoogleMap from "./GoogleMap";
import { CircularProgress } from "@mui/material";

const styles = {
  width: "100%",
  height: "70vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Home = ({ currCoords, onCoordsFetched }) => {
  useEffect(() => {
    if (!currCoords) {
      Geo.getCurrentCoords(onCoordsFetched);
    }
  }, [onCoordsFetched, currCoords]);

  return currCoords ? (
    <GoogleMap currCoords={currCoords} />
  ) : (
    <div style={styles}>
      <CircularProgress />
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
