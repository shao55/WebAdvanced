const http = require("http");

const server = http.createServer();

server.on("request", (req, res, err) => {
    console.log(req.url)
})

server.listen(8080);