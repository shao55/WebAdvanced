const { readFile } = require("fs");
const { dirname } = require("path");

const path = require("path");

readFile("./foo.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
    }
    const test = data + __dirname;
    console.log(test)
});