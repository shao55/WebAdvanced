import express from "express";
import { all, random } from "superqaharmandar";

import { writeFile } from "fs";

const app = express();

//Add this middleware to make body work in POST requests
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Superqaharmandar");
});

// app.get("/all", (req, res) => {
//   res.json({ all, random: random() });
// });

app.get("/all", (req, res) => {
    // query
    const exceptParams = req.params.randomLetter;
    const exceptQueryParams = req.query.letter;
    //A
    const filteredArray = all.filter(
        (el) => !el.toLowerCase().includes(exceptQueryParams.toLowerCase())
    );
    res.status(200).json(filteredArray);
});

app.post("/all", (req, res) => {
    const data = req.body.data;

    writeFile(
        "./expresscontent/postdata1.txt",
        data + "\n",
        { flag: "a" },
        () => {
            res.status(200).send("data was saved successfully!");
        }
    );
});

app.get("/random", (req, res) => {
    res.json(random());
});

app.listen(5000);