const express = require("express");
const router = express.Router();

const { getBaseController, postBaseController } = require("../controllers/base-controller");

router
    .route("/")
    .get(getBaseController)
    .post(postBaseController);

module.exports = router;