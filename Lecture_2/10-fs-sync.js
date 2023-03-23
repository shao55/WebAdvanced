const { readFileSync, writeFileSync } = require("fs");

const text = readFileSync("../Lecture_3/content/test.txt", "utf-8");
const textToWrite = readFileSync("../Lecture_3/content/test-to-write.txt", "utf-8");

console.log("1");

writeFileSync("../Lecture_3/content/result-sync.txt", `${text}, ${textToWrite}, additional info`, { flag: "a" });

console.log(text, textToWrite);