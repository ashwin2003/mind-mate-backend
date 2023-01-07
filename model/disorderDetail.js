const mongoose = require("mongoose");

const DisorderDetail = mongoose.Schema({
  d_id: {
    type: String,
    required: true,
  },
  disorder: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  steps: [
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
  images: [{ type: String }],
  symptoms: [{ type: String }],
});

module.exports = mongoose.model("DisorderDetail", DisorderDetail);
