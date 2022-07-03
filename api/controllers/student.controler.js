const getErrorMessage = require("../helpers/dbErrorHandle");
const Student = require("../models/student.model");
const Volunteer = require("../models/volunteer.model");
var extend = require("loadsh/extend");

const create = async (req, res) => {
  const student = new Student(req.body);
  try {
    await student.save();
    return res.status(200).json({
      message: "Estudante registrado!",
    });
  } catch (err) {
    return res.status(400).json({
      error: getErrorMessage(err),
    });
  }
};

const list = async (req, res) => {
  try {
    let students = await Student.find().select(
      "name parentName age parentTelephone address nationality"
    );
    res.json(students);
  } catch (err) {
    return res.status(400).json({
      error: getErrorMessage(err),
    });
  }
};

const studentByID = async (req, res, next, id) => {
  try {
    let student = await Student.findById(id);
    if (!student)
      return res.status("400").json({
        error: "Student not found",
      });
    req.profile = student;
    next();
  } catch (err) {
    return res.status("400").json({
      error: "Could not retrieve student",
    });
  }
};

const remove = async (req, res) => {
  try {
    let student = req.profile;
    let deletedStudent = await student.remove();
    res.json(deletedStudent);
  } catch (err) {
    return res.status(400).json({
      error: getErrorMessage(err),
    });
  }
};

const update = async (req, res) => {
  try {
    let student = req.profile;
    student.volunteerId = req.body.volunteerId;
    await insertVolunteer(student);
    student.volunteerId = req.body.volunteerId;
    student = extend(student, req.body);
    await student.save();
    res.json(student);
  } catch (err) {
    return res.status(400).json({
      error: getErrorMessage(err),
    });
  }

  async function insertVolunteer(student) {
    try {
      let volunteer = await Volunteer.findById(req.body.volunteer);
      console.log(volunteer);
      let contains = volunteer.students.some((item) => {
        return JSON.stringify(item) === JSON.stringify(student.id);
      });
      if (!contains) {
        volunteer.students.push(student);
      }
      await volunteer.save();
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};

module.exports = { create, list, studentByID, remove, update };
