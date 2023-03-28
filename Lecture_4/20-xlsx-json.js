const xlsx = require("xlsx");

const myFile = xlsx.readFileSync("./content/ovoshi.xlsx")

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
xlsx.utils.book_append_sheet(myFile, ws, "Abort Controller");
xlsx.writeFile(myFile, "./content/Sheet2.xlsx", { flag: "a" });