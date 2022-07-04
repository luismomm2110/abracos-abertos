var express = require("express");
var router = express.Router();
var candidateCtrl = require("../controllers/candidate.controller");

router
  .route("/api/candidate")
  .post(candidateCtrl.create)
  .get(candidateCtrl.list);

router.route("/api/candidate/:candidateID").delete(candidateCtrl.remove);
router.route("/api/candidate/:candidateID").get(candidateCtrl.get);
router.route("/api/candidate/:candidateID").put(candidateCtrl.update);
router.route("/api/accept/:candidateID").post(candidateCtrl.accept);

router.param("candidateID", candidateCtrl.candidateByID);

module.exports = router;
