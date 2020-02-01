const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
var path = require('path');

const dotenv = require("dotenv");
const router = require("./router");
const app = express();

// Environment Variables
dotenv.config({ path: "./config.env" });

app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);
// app.use(express.static(path.join(__dirname, './foodude/build')));

// MONGODB STUFF
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB connection successful!"));

const port = 3000;
app.listen(port, function() {
  console.log(`App running on port ${port}...`);
});