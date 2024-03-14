const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const DbConnection = require("./config/dbConfig");
const { default: mongoose } = require("mongoose");
const Controller = require("./Controller/stateController");
const PORT = process.env.PORT || 8000;
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

DbConnection();

app.get("/", (req, res) => {
  res.status(200).send({ message: "hi I'm up" });
});
app.get("/state", Controller.getState);
app.post("/update", Controller.setState);
mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log("database Connection error", err);
});
