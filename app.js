const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const userRoutes = require("./routes/user.routes");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/users", userRoutes);

module.exports = app;