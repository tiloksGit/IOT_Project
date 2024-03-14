const State = require("../models/state");

const getState = async (req, res) => {
  try {
    const states = await State.find().lean();
    console.log(states);
    res.status(200).send({ message: states });
  } catch {}
};

const setState = async (req, res) => {
  try {
    const { device_id, command } = req.body;
    if (!device_id) {
      res.status(400).send({ message: "All fields are required" });
    }
    const isAvailable = await State.findOne({ device_id });
    if (!isAvailable) {
      res.status(404).status({ message: "device not found" });
      return;
    }
    const response = await State.findOneAndUpdate(
      { device_id },
      {
        state: command == 0 ? 101 : 103,
        command,
      }
    )
      .then((response) => {
        res.status(201).send({ message: "state updated" });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch {}
};
module.exports = { getState, setState };
