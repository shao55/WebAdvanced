const express = require("express");
const checkDateFormat = require("../middlewares/checkDateFormat");

const router = express.Router();

router.get("/time", checkDateFormat);

module.exports = router;
