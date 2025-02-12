const express = require("express");
const airoute = require("./Router/ai.router");
const app = express();

app.use(express.json()); // req.body

app.get("/", (req, res) => {
  res.send("hello word");
});

app.use("/ai", airoute);

module.exports = app;
