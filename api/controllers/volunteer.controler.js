var Volunteer = require("../models/volunteer.model");
var extend = require("loadsh/extend");
var getErrorMessage = require("../helpers/dbErrorHandle");

const create = async (req, res) => {
  const volunteer = new Volunteer(req.body);
  try {
    await volunteer.save();
    return res.status(200).json({
      message: "Voluntário registrado!",
    });
  } catch (err) {
    return res.status(400).json({
      error: getErrorMessage(err),
    });
  }
};

const list = async (req, res) => {
  try {
    let volunteers = await Volunteer.find().select("name email age created");
    res.json(volunteers);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

module.exports = { create, list };
