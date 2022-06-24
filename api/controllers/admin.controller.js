var Admin = require("../models/admin.model");
var errorHandler = require("../helpers/dbErrorHandle");

const read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

const create = async (req, res) => {
  const admin = new Admin(req.body);
  try {
    await admin.save();
    return res.status(200).json({
      message: "Successfully signed up!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler(err),
    });
  }
};

module.exports = { read, create };
