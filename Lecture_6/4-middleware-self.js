const express = require("express");
const app = express();

const logger = require("./middlewares/logger");
const authorize = require("./middlewares/authorization");

app.use([logger, authorize]);

app.get("/", (req, res) => {
    res.send("My App");
});
app.get("/about", (req, res) => {
    res.send("About");
});

app.listen(5000);