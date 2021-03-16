const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const mongoose= require('mongoose')
const path = require('path')

const databaseUrl = "Workout";
const collections = ["exercises"];
const mongoDb = mongojs(databaseUrl, collections);
const db = require('./models')
// const Workout = require('./models/Workout')

const app = express();

app.use(logger("dev"));


app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// db.on("error", error => {
//   console.log("Database Error:", error);
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


require('./routes/api-routes')(app);
require('./routes/api-routes')(app);




app.listen(3000, () => {
  console.log("App running on port 3000!");
});
