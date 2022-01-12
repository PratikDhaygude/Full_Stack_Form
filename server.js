// Import npm packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

//import
const routes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 8080;

//mongodb connection
const MONGODB_URI =
  "mongodb+srv://pratik01:pratik01@cluster0.i26mr.mongodb.net/reactform?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB is connected!!!!");
});

//data parsing
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));


// HTTP request logger
app.use(morgan("tiny"));
app.use('/', routes);


app.listen(PORT, console.log(`Server is starting at ${PORT}`));
