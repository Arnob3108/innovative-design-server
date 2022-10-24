const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("aita amr graphics design server");
});

app.listen(port, () => {
  console.log("my port is", port);
});
