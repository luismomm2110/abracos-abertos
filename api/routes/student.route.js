var express = require("express");
var router = express.Router();
var studentCtrl = require("../controllers/student.controler");

router.route("/api/students").post(studentCtrl.create).get(studentCtrl.list);

router
  .route("/api/students/:studentID")
  .delete(studentCtrl.remove)
  .put(studentCtrl.update);

router.param("studentID", studentCtrl.studentByID);

module.exports = router;
