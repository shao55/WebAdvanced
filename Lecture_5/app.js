import express from "express";
import { all, random } from "superqaharmandar";
import { writeFile } from "fs";
const app = express();

app.get("/", (req, res) => {
    res.send("Superqaharmandar");
});

// app.get("/all", (req, res) => {
//     res.json({ all, random: random() });
// });

app.get("/all", (req, res) => {
    // query
    const exceptParams = req.params.randomLetter;
    const exceptQueryParams = req.query.letter;
    console.log(exceptQueryParams);
    // A
    const filteredArray = all.filter((el) => !el.toLowerCase().includes(exceptQueryParams.toLowerCase));
    res.json(filteredArray);
});

app.post("all", (req, res)=>{
    
})

app.get("/random", (req, res) => {
    res.json(random());
});

app.listen(5000);