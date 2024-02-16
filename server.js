const express = require("express");
const cors = require("cors");
const { faker } = require("@faker-js/faker");

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World, from express");
});

app.get("/students", (req, res) => {
  let students = [];
  for (let index = 0; index < 20; index++) {
    let obj = {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
    };
    students.push(obj);
  }

  res.send(students);
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
