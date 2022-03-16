import { FmdGood, Close } from "@mui/icons-material";
import {
  IconButton,
  Modal,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";

const modalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "#7f7f88",
  color: "white",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const closeBtnStyles = {
  position: "absolute",
  top: "1rem",
  right: "1rem",
  color: "white",
};

const Marker = ({ weatherData, setIsModalOpen }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
  }, [weatherData]);

  useEffect(() => {
    !open && setIsModalOpen(false);
  }, [open, setIsModalOpen]);

  const capitalizeFirstLetter = (string) =>
    string[0].toUpperCase() + string.slice(1);

  return (
    <>
      <Modal open={open} style={modalStyles}>
        <Box>
          <IconButton style={closeBtnStyles} onClick={() => setOpen(false)}>
            <Close size="large" />
          </IconButton>
          {weatherData ? (
            <>
              <Typography>Name: {weatherData.name}</Typography>
              <Typography>
                Temperature: {(weatherData.temp - 273.15).toFixed(1)}℃
              </Typography>
              <Typography>Cloudiness: {weatherData.clouds}%</Typography>
              <Typography>Wind: {weatherData.wind}m/s</Typography>
              <Typography>
                Description: {capitalizeFirstLetter(weatherData.description)}
              </Typography>
            </>
          ) : (
            <CircularProgress />
          )}
        </Box>
      </Modal>
      <IconButton style={{ transform: "translate(-50%, -50%)" }}>
        <FmdGood size="large" />
      </IconButton>
    </>
  );
};

export default Marker;
