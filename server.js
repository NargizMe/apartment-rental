const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.post("/search-apartments", (req, res) => {
  const data = req.body;
  let errorObject = {};
  if (!data.checkIn) {
    errorObject["checkIn"] = "Cannot be empty";
  }
  if (!data.checkOut) {
    errorObject["checkOut"] = "Cannot be empty";
  }
  return res.status(418).json({ errorObject });
});

app.post("/send-message", (req, res) => {
  const data = req.body;
  let errorObject = {};
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
    errorObject["email"] = "Email is not correct";
  }
  if (!data.email) {
    errorObject["email"] = "Cannot be empty";
  }
  if (!data.message) {
    errorObject["message"] = "Cannot be empty";
  }
  return res.status(418).json({ errorObject });
});

app.post("/subscribe", (req, res) => {
  const data = req.body;
  let errorObject = {};
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
    errorObject["email"] = "Email is not correct";
  }
  if (!data.email) {
    errorObject["email"] = "Cannot be empty";
  }
  return res.status(418).json({ errorObject });
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
