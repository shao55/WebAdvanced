const http = require("http");
const fs = require("fs");

const todoFile = fs.readFileSync("./build/index.html");
const todoJS = fs.readFileSync("./build/static/js/main.142fd636.js");
const todoJSM = fs.readFileSync("./build/static/js/main.142fd636.js.map");
const todoCSS = fs.readFileSync("./build/static/css/main.bfaed1f7.css");
const todoCSSM = fs.readFileSync("./build/static/css/main.bfaed1f7.css.map");
const todoJSON = fs.readFileSync("./build/manifest.json");
const todoFAV = fs.readFileSync("./build/favicon.png");
const logo = fs.readFileSync("./build/logo192.png");


const server = http.createServer((req, res) => {
    console.log((req.url));

    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/plain" })
        res.write("Home");
    } else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/plain" })
        res.write("About")
    } else if (req.url === "/todo") {
        res.writeHead(200, { "content-type": "text/html" })
        res.write(todoFile)
    } else if (req.url === "/static/js/main.142fd636.js") {
        res.writeHead(200, { "content-type": "text/javascript" })
        res.write(todoJS)
    } else if (req.url === "/static/js/main.142fd636.js.map") {
        res.writeHead(200, { "content-type": "text/javascript" })
        res.write(todoJSM)
    } else if (req.url === "/static/css/main.bfaed1f7.css") {
        res.writeHead(200, { "content-type": "text/css" })
        res.write(todoCSS)
    } else if (req.url === "/static/css/main.bfaed1f7.css.map") {
        res.writeHead(200, { "content-type": "text/css" })
        res.write(todoCSSM)
    } else if (req.url === "/manifest.json") {
        res.writeHead(200, { "content-type": "text/json" })
        res.write(todoJSON)
    } else if (req.url === "/favicon.png") {
        res.writeHead(200, { "content-type": "text/png" })
        res.write(todoFAV)
    } else if (req.url === "/logo192.png") {
        res.writeHead(200, { "content-type": "text/png" })
        res.write(logo)
    } else {
        res.writeHead(200, { "content-type": "text/html" })
        res.write("<h1>404 Sorry page not found</h1>")
    }

    res.end()
});

server.listen(5000);