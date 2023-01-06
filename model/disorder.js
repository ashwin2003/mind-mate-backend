const mongoose = require("mongoose");

const Disorder = mongoose.Schema({
  disorder: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Disorder", Disorder);
