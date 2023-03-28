const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const options = {
      hostname: "localhost",
      method: "POST",
      port: 8000,
    };

    const request = http.request(options, () => {
      console.log("I am sending new POST request");
    });

    const stream = fs.createReadStream("./Financial_Sample.xlsx");

    request.on("error", (err) => {
      console.log("error: ", err);
    });

    stream.on("data", (chunk) => {
      request.write(JSON.stringify(chunk));
    });

    stream.on("end", () => {
      request.end();
    });
  })
  .listen(8080);

http
  .createServer((req, res) => {
    req.on("data", (chunk) => {
      console.log(chunk);
    });
    res.end();
  })
  .listen(8000);
