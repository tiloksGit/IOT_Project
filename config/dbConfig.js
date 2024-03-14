const mongoose = require("mongoose");

const url =
  "mongodb+srv://iot_group:Iot123@cluster0.3lfgqkn.mongodb.net/Security?retryWrites=true&w=majority&appName=Cluster0";

const ConnectDb = async () => {
  mongoose
    .connect(url)
    .then((response) => {})
    .catch((err) => {
      console.error(`Error connecting to the database. \n${err}`);
    });
};
module.exports = ConnectDb;
