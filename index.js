const express = require("express");
const cors = require("cors");
const courses = require("./onlineCourseDB.json");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCard = courses.find((card) => card.id === id);
  res.send(selectedCard);
});

app.listen(port, () => {
  console.log("my port is", port);
});
