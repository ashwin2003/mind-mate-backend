const mongoose = require("mongoose");
const Disorder = require("./disorder");

const Question = mongoose.Schema({
  d_id: {
    type: String,
    required: true,
    ref: Disorder,
  },
  question: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Question", Question);
