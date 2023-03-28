const fs = require("fs");

for (let i = 0; i <= 10000; i++) {
    fs.writeFileSync("./content/big.txt", `Big file: ${i} \n`, { flag: "a" })
}

for (let i = 0; i <= 100000; i++) {
    fs.writeFileSync("./content/verybig.txt", `Very big file: ${i} \n`, { flag: "a" })
}
