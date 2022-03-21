import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { connect } from "react-redux";
import Weather from "../agent";
import { UPDATE_HISTORY } from "../redux/actionTypes";
import getSimplifiedStats from "../utils/statistics";
import ListHistory from "./ListHistory";
import Statistics from "./Statistics";
import styles from "./styles";

const History = ({ history, onLoad }) => {
  useEffect(() => {
    onLoad();
  }, [onLoad]);
  return history[0] ? (
    <>
      <Statistics stats={getSimplifiedStats(history)} />
      <ListHistory stats={getSimplifiedStats(history)} />
    </>
  ) : (
    <div style={styles.ctn}>
      <CircularProgress />
    </div>
  );
};

const mapStateToProps = (state) => ({ history: state.stats.history });

const mapDispatchToProps = (dispatch) => ({
  onLoad: dispatch({
    type: UPDATE_HISTORY,
    payload: Weather.history(),
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
