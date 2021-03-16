const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Exercise = new Schema({
  type: {
    type: String,
    trim: true,
  },

  name: {
    type: String,
  },

  duration: {
    type: Number,
  },

  weight: {
    type: Number,
  },
  reps: {
      type: Number
  },
  sets: {
      type: Number
  }
});

const Workout = mongoose.model("Workout", Exercise);

module.exports = Workout;
