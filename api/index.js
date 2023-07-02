const express = require("express");
const mongoose = require("mongoose");
const { config } = require("dotenv");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

const routes = require("./routes/routes.js");
app.use(routes);

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: error.message || "There seems to be some problems.",
  });
});

app.listen(8000, async () => {
  console.log("server started at http://localhost:8000");
  console.log("press Ctrl+C to stop");
  await mongoose.connect("mongodb://127.0.0.1:27017/MernProject");
  console.log("MongoDB connected");
});

/*
-application middleware
-route middleware
-Built-in/First-party Middleware 
-Third party middleware
-Error Handling middleware
*/
