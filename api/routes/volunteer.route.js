var express = require("express");
var router = express.Router();
var volunteerCtrl = require("../controllers/volunteer.controler");

router
  .route("/api/volunteers")
  .get(volunteerCtrl.list)
  .post(volunteerCtrl.create);

module.exports = router;
