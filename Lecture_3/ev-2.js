const fs = require("fs");

fs.readFile("./content/first.txt", () => {
    setTimeout(() => {
        console.log("Timeout")
    }, 0);

    setImmediate(() => {
        console.log("Immediate")
    });
})