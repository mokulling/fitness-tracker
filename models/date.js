const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const daySchema = new Schema({
    day: {
        type: Date,
        date: Date.now()
    }

});

const Day = mongoose.model("Day", daySchema);

module.exports = Day;
