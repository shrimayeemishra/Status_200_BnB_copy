/** @format */
require("dotenv").config();
const express = require("express");
const mongo = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const videoRoutes = require("./routes/videosRoutes");
const showProfileRoutes = require("./routes/showProfileRoutes");

// Initializing express App
const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  next();
});

//Routes
app.use("/api/videos", videoRoutes);
app.use("/api/user", userRoutes);
app.use("/api/doctors", showProfileRoutes);

mongo
  .connect(process.env.m_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening to Port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
