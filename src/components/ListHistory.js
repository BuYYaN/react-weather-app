import React, { useState } from "react";
import {
  Pagination,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const styles = {
  display: "flex",
  justifyContent: "center",
  marginTop: "2rem",
  width: "100%",
};

const ListHistory = ({ stats: { weatherHistory: history } }) => {
  const [page, setPage] = useState(1);
  const [filteredHistory, setFilteredHistory] = useState(history.slice(0, 10));

  const handleChange = (e, val) => {
    setFilteredHistory([...history].splice((val - 1) * 10, 10));
    setPage(val);
  };

  const capitalizeFirstLetter = (string) =>
    string[0].toUpperCase() + string.slice(1);

  return (
    <>
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
      <Pagination
        style={styles}
        count={Math.floor((history.length + 10) / 10) - 0}
        color="primary"
        page={page}
        onChange={handleChange}
      />
    </>
  );
};

export default ListHistory;
