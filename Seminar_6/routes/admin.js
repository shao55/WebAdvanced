const express = require("express");
const checkAdmin = require("../middlewares/checkAdmin");
const authorizeUser = require("../middlewares/authorizeUser");
const checkAuthorizeFromAdmin = require("../middlewares/checkAuthorizeFromAdmin");

const router = express.Router();

router
  .get("/admin", checkAdmin)
  .post("/admin", authorizeUser, checkAuthorizeFromAdmin, (req, res) => {
    const admin = req.is_dalida;
    res.status(200).send(admin);
  });

module.exports = router;
