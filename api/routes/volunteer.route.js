var express = require("express");
var router = express.Router();
var volunteerCtrl = require("../controllers/volunteer.controler");

router
  .route("/api/volunteers")
  .post(volunteerCtrl.create)
  .get(volunteerCtrl.list);

router.route("/api/volunteers/:volunteerID").delete(volunteerCtrl.remove);
router.route("/api/volunteers/:volunteerID").get(volunteerCtrl.get);
router.route("/api/volunteers/:volunteerID").put(volunteerCtrl.update);

router.param("volunteerID", volunteerCtrl.volunteerByID);

module.exports = router;
