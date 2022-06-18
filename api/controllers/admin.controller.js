var Admin = require("../models/admin.model");
var getErrorMessage = require("../helpers/dbErrorHandle");

const read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};
