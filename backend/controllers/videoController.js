/** @format */

const Videos = require("../models/videoModel");
const mongoose = require("mongoose");

// get videos for a particular user
const getCurrentVideos = async (req, res) => {
  const user_id = req.user._id;
  const video = await Videos.find({ user_id }).sort({ createdAt: -1 });

  res.status(200).json(video);
};

// get all videos
const getVideos = async (req, res) => {
  const video = await Videos.find({}).sort({ createdAt: -1 });

  res.status(200).json(video);
};

// get a single video
const getVideo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such video found" });
  }

  const video = await Videos.findById(id);

  if (!video) {
    return res.status(404).json({ error: "No such video found" });
  }

  res.status(200).json(video);
};

// create new video
const createVideo = async (req, res) => {
  const { link, description, tips } = req.body;

  let emptyFields = [];

  if (!link) {
    emptyFields.push("link");
  }
  if (!description) {
    emptyFields.push("description");
  }
  if (!tips) {
    emptyFields.push("tips");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // add doc to db
  try {
    const video = await Videos.create({ link, description, tips }); // have to add user id
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a video
const deleteVideo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such video found" });
  }

  const video = await Videos.findOneAndDelete({ _id: id });

  if (!video) {
    return res.status(400).json({ error: "No such video found" });
  }

  res.status(200).json(video);
};

module.exports = {
  getVideos,
  getVideo,
  createVideo,
  deleteVideo,
};
