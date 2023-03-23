const http = require("http");

const server = http.createServer((req, res, err) => {
    if (req.url === "/") {
        // BLOCKING CODE!
        // for (let i = 0; i < 10000; i++) {
        //     for (let j = 0; j < 10000; j++) {
        //         console.log(i + j)
        //     }
        // }
        res.write("Main page");
    }
    else if (req.url === "/cart") {
        res.write("Cart page");
    }
    else res.write("Page not defined")
    res.end();
});

server.listen(8080, () => {
    console.log("Server is listening")
});