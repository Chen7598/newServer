require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

let array = [];

app.get("/", (req, res) => {
  //   res.send([...array]);
  res.json(array);
});

app.post("/", (req, res) => {
  const user = req.body.user;
  console.log(user);
  array.push(user);
  console.log(array);
  //   res.send(array);
  res.json(array);
});

app.delete("/", (req, res) => {
  array = array.filter((user) => user.name != req.body.user.name);
  console.log(array);
  res.json(array);
});

app.put("/", (req, res) => {
  console.log("-------1 ");
  const user = array.find((user) => user.name === req.body.user.name);
  user.name = req.body.user.newName;
  res.json(array);
});

// console.log(username);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
