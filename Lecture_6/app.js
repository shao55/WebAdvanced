const express = require("express");
const app = express();

const logger = require("./middlewares/logger");
const authorize = require("./middlewares/authorization");

const baseRouter = require("./routes/base");
const userRouter = require("./routes/user");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use([logger, authorize]);

app.use([baseRouter, userRouter]);

app.listen(5000);