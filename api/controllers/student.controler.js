var Student = require("../models/student.model");
var getErrorMessage = require("../helpers/dbErrorHandle");

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

module.exports = { create, list, studentByID, remove };
