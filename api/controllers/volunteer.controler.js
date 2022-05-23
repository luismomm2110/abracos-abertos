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
    let users = await Volunteer.find().select(
      "name email age cpf address educationalLevel phone"
    );
    res.json(users);
  } catch (err) {
    return res.status(400).json({
      error: getErrorMessage(err),
    });
  }
};

const volunteerByID = async (req, res, next, id) => {
  try {
    let volunteer = await Volunteer.findById(id);
    if (!volunteer)
      return res.status("400").json({
        error: "Volunteer not found",
      });
    req.profile = volunteer;
    next();
  } catch (err) {
    return res.status("400").json({
      error: "Could not retrieve volunteer",
    });
  }
};

const remove = async (req, res) => {
  try {
    let volunteer = req.profile;
    let deletedVolunteer = await volunteer.remove();
    res.json(deletedVolunteer);
  } catch (err) {
    return res.status(400).json({
      error: getErrorMessage(err),
    });
  }
};

const get = async (req, res) => {
  try {
    let volunteer = req.profile;
    res.json(volunteer);
  } catch (err) {
    return res.status(400).json({
      error: getErrorMessage(err),
    });
  }
};

const update = async (req, res) => {
  try {
    let user = req.profile;
    user = extend(user, req.body);
    await user.save();
    res.json(user);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

module.exports = { create, list, volunteerByID, remove, get, update };
