const { readFile, writeFile } = require("fs").promises;


const start = async () => {
    try {
        const result = await readFile("../Lecture_3/content/first.txt", "utf-8");
        const result2 = await readFile("../Lecture_3/content/second.txt", "utf-8");
        await writeFile(
            "../Lecture_3/content/resultFrom12async.txt",
            `Async result 110: ${result + " " + result2} \n`,
            { flag: "a" },
            (err) => {
                if (err) {
                    return
                }
            }
        );
    } catch (error) {
        console.log(error)
    }
}

start()

// const { promisify } = require("util");

// const promisifiedReader = promisify(readFile);
// const promisifiedWriter = promisify(writeFile);
// const getFile = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, "utf-8", (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             resolve(data)
//         });
//     })
// };

// getFile("../Lecture_3/content/first.txt")
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));