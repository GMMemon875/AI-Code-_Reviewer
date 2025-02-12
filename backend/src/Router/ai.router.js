const express = require("express");
const aicontroller = require("../controllar/controller");
const router = express.Router();

router.post("/get-review", aicontroller.getResponse);

module.exports = router;
