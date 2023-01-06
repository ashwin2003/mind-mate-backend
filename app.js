const express = require("express");
const database = require("./config/database");
const cors = require("cors");
const app = express();

app.use(cors());

const questionRoutes = require("./routes/question.js");
const disorderRoutes = require("./routes/disorder.js");

require("dotenv").config();

database();

app.use(express.json());

app.use("/api/questions", questionRoutes);
app.use("/api/disorder", disorderRoutes);

module.exports = app;
