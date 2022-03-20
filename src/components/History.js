import { CircularProgress } from "@mui/material";
import { connect } from "react-redux";
import getSimplifiedStats from "../utils/statistics";
import ListHistory from "./ListHistory";
import Statistics from "./Statistics";
import styles from "./styles";

const History = ({ history }) => {
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

export default connect(mapStateToProps)(History);
