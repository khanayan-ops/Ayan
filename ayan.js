console.log("Hello Node.js");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
require("dotenv").config();

console.log(process.env.PORT);