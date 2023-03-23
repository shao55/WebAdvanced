const path = require("path");

// console.log(path.sep);

const filepath = path.join("/content/", "info", "test.txt");

console.log(filepath);

const basename = path.basename(filepath);

console.log(basename);

const absolute = path.resolve(__dirname, "content", "sub", "text.txt");

console.log(absolute);