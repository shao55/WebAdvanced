const { readFile, writeFile } = require("fs");

console.log(1)

readFile("../Lecture_3/content/test.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("first data fetched");
    readFile("../Lecture_3/content/test-to-write.txt", "utf-8", (err, data2) => {
        if (err) {
            console.log(err)
            return
        }
        console.log("second data fetched")
        console.log(data);
        console.log(data2);

        writeFile("../Lecture_3/content/result-async.txt", `Async result 2: ${data + " " + data2} \n` , { flag: "a" }, (err) => {
            if (err) {
                console.log("err write: ", err)
            }
            console.log("write completed")
        })
    })
})

console.log(2);