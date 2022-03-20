import { Box, Paper } from "@mui/material";

const styles = {
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  lineHeight: "64px",
  "& > :not(style)": {
    m: 3,
    width: 128,
    height: 128,
  },
};

const Statistics = ({ stats }) => {
  return (
    <Box sx={styles}>
      <Paper elevation={3}>Total: {stats.totalQueries}</Paper>
      <Paper elevation={3}>Most Searched: {stats.mostSearchedQuery}</Paper>
      <Paper elevation={3}>
        Minimal Temp: {(stats.temperatureData.min - 273.15).toFixed(1)}℃
      </Paper>
      <Paper elevation={3}>
        Maximal Temp: {(stats.temperatureData.max - 273.15).toFixed(1)}℃
      </Paper>
      <Paper elevation={3}>
        Average Temp: {(stats.temperatureData.avg - 273.15).toFixed(1)}℃
      </Paper>
    </Box>
  );
};

export default Statistics;
