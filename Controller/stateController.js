const State = require("../models/state");

const getState = async (req, res) => {
  try {
    const states = await State.find().lean();
    const data = states.map((state, i) => {
      return {
        device_id: state.device_id,
        state: state.state,
        command: state.command,
      };
    });
    console.log(data);
    const responseData = { device_state: data };
    res.status(200).send(responseData);
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
        state: device_id == D_400 ? command == 0 ? 101 : 103 : device_id == D_401 ? command == 0 ? 102 : 104 : device_id == D_402 ? command == 0 ? 0 : 1 : "",
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

const testArduino = async (req, res) => {
  console.log(req.body);
  res.status(200).send({ message: "done" });
};
module.exports = { getState, setState, testArduino };
