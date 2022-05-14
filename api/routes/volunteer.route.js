var express = require("express");
var router = express.Router();
var volunteerCtrl = require("../controllers/volunteer.controler");

router
  .route("/api/volunteers")
  .post(volunteerCtrl.create)
  .get(volunteerCtrl.list);

router.route("/api/volunteers/:volunteerID").delete(volunteerCtrl.remove);

router.param("volunteerID", volunteerCtrl.volunteerByID);

module.exports = router;
