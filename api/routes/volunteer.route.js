var express = require("express");
var router = express.Router();
var volunteerCtrl = require("../controllers/volunteer.controler");

router
  .route("/api/volunteers")
  .post(volunteerCtrl.create)
  .get(volunteerCtrl.list);

module.exports = router;
