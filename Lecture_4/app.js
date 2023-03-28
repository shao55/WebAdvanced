const xlsx = require("xlsx");
const http = require("http");
const fs = require("fs");

const myFile = fs.readFileSync("./content/ovoshi.xlsx")

const data = [{
    name: "Nurgissa",
    product: "vegetables",
    amount: 5000
}, {
    name: "Assem",
    product: "fruits",
    amount: 7000
}];

const ws = xlsx.utils.json_to_sheet(data);
xlsx.utils.book_append_sheet(file, ws, "Abort Controller");
xlsx.writeFile(file, "./content/Sheet2.xlsx", { flag: "a" })

// http.createServer((request, response) => {
//     if (request.method !== "GET") return response.end("");
// }).listen(5000); 