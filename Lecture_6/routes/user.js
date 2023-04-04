const express = require("express");

const router = express.Router();

const { putUserController, deleteUserController } = require("../controllers/user-controller");

router
    .route("/user/:id")
    .put(putUserController)
    .delete(deleteUserController);

module.exports = router;