const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "hi I'm up" });
});
app.listen(3000, () => {
  console.log("server listening on port 3000");
});
