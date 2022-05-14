var express = require("express");
var router = express.Router();
var studentCtrl = require("../controllers/volunteer.controler");

router.route("/api/students").post(studentCtrl.create).get(studentCtrl.list);

router.route("/api/students/:studentID").delete(studentCtrl.remove);

router.param("studentID", studentCtrl.studentByID);

module.exports = router;
