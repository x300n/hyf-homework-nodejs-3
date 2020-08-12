const express = require("express");
const app = express();

const bodyPraser = require("body-parser");
app.use(bodyPraser.json());

const port = 3000;
let users = [];
let id = 0;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/user/:id", (req, res) => {
  let user = users.filter((user) => user.id == req.params.id);
  res.send(user[0]);
});

app.post("/user", (req, res) => {
  let user = {
    id: id,
  };

  id = id + 1;

  users.push(user);

  res.status(200).send(user);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
