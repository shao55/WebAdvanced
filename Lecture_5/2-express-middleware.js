const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./build")); // Middleware

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/about", (req, res) => {
    res.send("About");
});

app.get("/todo", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./build/index.html"));
});

app.all("*", (req, res) => {
    res.status(404).send("<h1>Page not found 404</h1>")
})

app.listen(5000);