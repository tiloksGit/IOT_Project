const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  device_id: { type: String, required: true },
  state: {
    type: Number,
    required: true,
  },
  command: {
    type: Number,
    required: false,
  },
});
module.exports = mongoose.model("state", Schema);
