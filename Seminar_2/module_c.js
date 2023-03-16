const { writeFile } = require("fs");
const os = require("os");

const type = os.type();
const version = os.version();

writeFile("./foo.txt", `${type}, ${version} \n`, { flag: "w" }, (err, result) => {
    if (err) {
        console.log(err)
    }
    console.log("OS parameters written successfully");
});