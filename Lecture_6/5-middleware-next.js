const express = require("express");
const app = express();

app.get(
    "/user/:id",
    (req, res, next) => {
        if (req.params.id === "0") next("route");
        else next();
    },
    (req, res, next) => {
        res.send("regular");
    }
);
app.get("/user/:id", (req, res) => {
    res.send(`About ${req.params.id}`);
});

app.listen(5000);