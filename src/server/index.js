const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const weatherRouter = require("./express/weather.routes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/weather", weatherRouter);

app.listen(4000, () => console.log("ALE KURWA DAJE CZADU"));