var Candidate = require("../models/candidate.model");
var Volunteer = require("../models/volunteer.model");
var extend = require("loadsh/extend");
var getErrorMessage = require("../helpers/dbErrorHandle");

const create = async (req, res) => {
  const candidate = new Candidate(req.body);
  try {
    await candidate.save();
    return res.status(200).json({
      message: "Candidato registrado!",
    });
  } catch (err) {
    return res.status(400).json({
      error: getErrorMessage(err),
    });
  }
};

const list = async (req, res) => {
  try {
    let users = await Candidate.find().select(
      "name email age cpf address educationalLevel phone"
    );
    res.json(users);
  } catch (err) {
    return res.status(400).json({
      error: getErrorMessage(err),
    });
  }
};

const candidateByID = async (req, res, next, id) => {
  try {
    let candidate = await Candidate.findById(id);
    if (!candidate)
      return res.status("400").json({
        error: "Candidate not found",
      });
    req.profile = candidate;
    next();
  } catch (err) {
    return res.status("400").json({
      error: "Could not retrieve candidate",
    });
  }
};

const remove = async (req, res) => {
  try {
    let candidate = req.profile;
    let deletedCandidate = await candidate.remove();
    res.json(deletedCandidate);
  } catch (err) {
    return res.status(400).json({
      error: getErrorMessage(err),
    });
  }
};

const get = async (req, res) => {
  try {
    let candidate = req.profile;
    res.json(candidate);
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

const accept = async (req, res) => {
  try {
    let candidate = req.profile;
    const newVolunteer = {
      name: candidate.name,
      email: candidate.email,
      age: candidate.age,
      cpf: candidate.cpf,
      address: candidate.address,
      educationalLevel: candidate.educationalLevel,
      phone: candidate.phone,
    };
    console.log(newVolunteer);
    const volunteer = new Volunteer(newVolunteer);
    await volunteer.save();
    await candidate.remove();
    res.json(volunteer.name + "Aceito como voluntário");
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: getErrorMessage(err),
    });
  }
};

module.exports = {
  create,
  list,
  candidateByID,
  remove,
  get,
  update,
  accept,
};
