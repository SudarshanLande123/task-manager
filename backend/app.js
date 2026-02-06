const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const taskRoutes = require("./routes/taskRoutes");
app.use("/", taskRoutes);

module.exports = app;
