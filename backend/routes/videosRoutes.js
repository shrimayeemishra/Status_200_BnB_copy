/** @format */

const express = require("express");
const router = express.Router();
const {
  getVideos,
  getVideo,
  createVideo,
  deleteVideo,
} = require("../controllers/videoController");

// User needs to login before using
const requireAuth = require("../middleware/requireAuth");

// GET all videos
router.get("/", getVideos);

//GET a single video
router.get("/:id", getVideo);

// POST a new video
router.post("/", createVideo);

// DELETE a video
router.delete("/:id", deleteVideo);

module.exports = router;
