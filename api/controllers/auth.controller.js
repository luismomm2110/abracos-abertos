var Admin = require("../models/admin.model");
const { expressjwt: expressJwt } = require("express-jwt");
var jwt = require("jsonwebtoken");
var config = require("./../configMongo.json");

const signin = async (req, res) => {
  try {
    let admin = await Admin.findOne({ email: req.body.email });
    if (!admin) return res.status("401").json({ error: "User not found" });
    if (!admin.authenticate(req.body.password)) {
      return res
        .status("401")
        .send({ error: "Email and password don't match." });
    }
    const token = jwt.sign({ _id: admin._id }, config.jwtSecret);

    res.cookie("t", token, { expire: new Date() + 9999 });

    return res.json({
      token,
      user: {
        _id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (err) {
    return res.status("401").json({ error: "Could not sign in" });
  }
};

const signout = (req, res) => {
  res.clearCookie("t");
  return res.status("200").json({
    message: "signed out",
  });
};

const requireSignin = expressJwt({
  secret: config.jwtSecret,
  userProperty: "auth",
  algorithms: ["sha1", "RS256", "HS256"],
});

const hasAuthorization = (req, res) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!authorized) {
    return res.status("403").json({
      error: "User is not authorized",
    });
  }
};

module.exports = { signin, signout, requireSignin, hasAuthorization };
