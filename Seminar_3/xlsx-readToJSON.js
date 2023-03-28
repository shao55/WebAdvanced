const xlsx = require("xlsx");
const http = require("http");

const myFile = xlsx.readFile("./content/Financial_Sample.xlsx");
const sheet = xlsx.utils.sheet_to_json(myFile.Sheets[myFile.SheetNames[0]]);

const server = http.createServer((req, res, err) => {
    res.write(JSON.stringify(sheet));
    res.end();
});

server.listen(8080, () => {
    console.log("Server Started");
});