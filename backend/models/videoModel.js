/** @format */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const videoSchema = new Schema(
  {
    link: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tips: {
      type: String,
      requried: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", videoSchema);
