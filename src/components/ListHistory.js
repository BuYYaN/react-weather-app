import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  Pagination,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Weather from "../agent";

const styles = {
  display: "flex",
  justifyContent: "center",
  marginTop: "2rem",
  width: "100%",
};

const ListHistory = () => {
  const [history, setHistory] = useState([]);
  const [filteredHistory, setFilteredHistory] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      setHistory(await Weather.history(Infinity));
    }
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredHistory(history.slice(0, 10));
  }, [history]);

  const handleChange = (e, val) => {
    setFilteredHistory([...history].splice((val - 1) * 10, 10));
    setPage(val);
  };

  const capitalizeFirstLetter = (string) =>
    string[0].toUpperCase() + string.slice(1);

  return filteredHistory ? (
    <>
      <div>
        {filteredHistory.map((el) => (
          <Accordion key={el.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{el.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Temperature: {(el.temp - 273.15).toFixed(1)}℃
              </Typography>
              <Typography>Cloudiness: {el.clouds}%</Typography>
              <Typography>Wind: {el.wind}m/s</Typography>
              <Typography>
                Description: {capitalizeFirstLetter(el.description)}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <Pagination
        style={styles}
        count={((history.length + 10) / 10).toFixed() - 0}
        color="primary"
        page={page}
        onChange={handleChange}
      />
    </>
  ) : (
    <CircularProgress style={styles} />
  );
};

export default ListHistory;
