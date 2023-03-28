const http = require("http");
const fs = require("fs");


http.createServer((req, res) => {
    // const data = fs.readFileSync("./content/big.txt", "utf-8");
    // res.end(data)

    const fsStream = fs.createReadStream("./content/big.txt", "utf-8", { highWaterMark: 60000 });
    fsStream.on("data", () => {
        fsStream.pipe(res)
    })

    fsStream.on("error", (err) => {
        res.end(err)
    })

}).listen(5000)