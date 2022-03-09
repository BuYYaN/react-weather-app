import { useEffect } from "react";
import { connect } from "react-redux";
import Geo from "../api/geolocation";
import { MAP_LOADED } from "../redux/actionTypes";
import GoogleMap from "./GoogleMap";

const Home = ({ currCoords, onCoordsFetched }) => {
  useEffect(() => {
    if (!currCoords) {
      Geo.getCurrentCoords(onCoordsFetched);
    }
  }, [onCoordsFetched, currCoords]);

  return currCoords ? <GoogleMap currCoords={currCoords} /> : "Loading";
};

const mapStateToProps = (state) => ({
  currCoords: state.map.currCoords,
});

const mapDispatchToProps = (dispatch) => ({
  onCoordsFetched: (coords) => dispatch({ type: MAP_LOADED, payload: coords }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
