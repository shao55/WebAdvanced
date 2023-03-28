const xlsx = require("xlsx");
const http = require("http");

http.createServer((request, res) => {
    if (request.method !== "GET") return res.end("");
    const wb = xlsx.readFile("./content/ovoshi.xlsx", { type: "binary" });
    res.setHeader(
        "Content-Disposition",
        'attachment; filename="SheetJS2.xlsx"'
    );

    res.end(xlsx.write(wb, { type: "buffer", bookType: "xlsx" }));
}).listen(5000);