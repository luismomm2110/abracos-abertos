var express = require("express");
var router = express.Router();
var adminCtrl = require("../controllers/admin.controller");

router.route("/api/admin").post(adminCtrl.create).get(adminCtrl.read);

module.exports = router;
