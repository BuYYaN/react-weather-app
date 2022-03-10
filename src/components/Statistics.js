import { Box, Paper, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import {
  getTotalNumberOfQueries,
  getTempData,
  getMostSearchedQuery,
} from "../utils/statistics";

const styles = {
  display: "flex",
  justifyContent: "center",
  marginTop: "2rem",
  width: "100%",
};

const Statistics = () => {
  const [tempData, setTempData] = useState({});
  const [totalQueries, setTotalQueries] = useState(0);
  const [mostSearchedQuery, setMostSearchedQuery] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setTotalQueries(await getTotalNumberOfQueries());
      setTempData(await getTempData());
      setMostSearchedQuery(await getMostSearchedQuery());
    }
    fetchData();
  }, []);
  return mostSearchedQuery ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        lineHeight: "64px",
        "& > :not(style)": {
          m: 3,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={3}>Total: {totalQueries}</Paper>
      <Paper elevation={3}>Most Searched: {mostSearchedQuery}</Paper>
      <Paper elevation={3}>
        Minimal Temperatur: {(tempData.min - 273.15).toFixed(1)}℃
      </Paper>
      <Paper elevation={3}>
        Maximal Temperatur: {(tempData.max - 273.15).toFixed(1)}℃
      </Paper>
      <Paper elevation={3}>
        Average Temperatur: {(tempData.avg - 273.15).toFixed(1)}℃
      </Paper>
    </Box>
  ) : (
    <CircularProgress style={styles} />
  );
};

export default Statistics;
