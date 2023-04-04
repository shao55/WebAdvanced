const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

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

app.post("/names", async (req, res) => {
  const newName = req.body.name;

  try {
    await fs.readFile("./matrix.txt", "utf-8", (err, data) => {
      if (err) {
        res.status(500).send(`error while reading file: ${err}`);
      }

      const dataArray = data.split("\n");

      const newNameToAppend = `\n${dataArray.length + 1}) ${newName}`;

      fs.writeFile("./matrix.txt", newNameToAppend, { flag: "a" }, (err) => {
        if (err) {
          res.status(500).send(`error while writing new name: ${err}`);
        }
      });
      res.status(200).send(newNameToAppend);
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

// name = Berik, id = 3
app.put("/names/:name/:id", async (req, res) => {
  const { name, id } = req.params;

  try {
    await fs.readFile("./matrix.txt", "utf-8", (err, data) => {
      if (err) {
        res.status(500).send(`error while reading file: ${err}`);
      }

      const dataArray = data.split("\n");

      dataArray[id - 1] = `${id}) ${name}`;

      const changedArray = dataArray.join("\n");
      fs.writeFile("./matrix.txt", changedArray, (err) => {
        if (err) {
          res.status(500).send(`error while writing new name: ${err}`);
        }
      });
      res.status(200).send("");
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(8000, () => {
  console.log("server listening on port 8000...");
});
