// Task 1
// 1) Create HTTP server usinf Express.js
// 2) Write GET /names endpoint
// 3) Return all items from .txt file

const express = require("express");
const fs = require("fs");

const app = express();

app.get("/names", async (req, res) => {
  try {
    await fs.readFile("./matrix.txt", "utf-8", (err, data) => {
      if (err) {
        res.status(500).send(`error while reading file: ${err}`);
      }

      console.log(data);
      res.status(200).send(data);
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(8000, () => {
  console.log("server listening on port 8000...");
});