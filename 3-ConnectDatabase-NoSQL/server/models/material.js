const mongoose = require('mongoose');

const MaterialSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Material", MaterialSchema);