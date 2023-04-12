import express from "express";
import mongodb from "mongodb";
import { connect, getDB } from "./db.js";

const app = express();
const PORT = 8080;

connect();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  getDB()
    .collection("ovsklad")
    .find({})
    .toArray((err, data) => {
      if (err) {
        res.status(500).send();
        return;
      }
      res.status(200).json(data);
    });
});

app.post("/", (req, res) => {
  getDB().collection("fruitsklad").insertOne(req.body);

  res.status(200).send();
});

app.delete("/:id", (req, res) => {
  getDB()
    .collection("products")
    .deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
});

app.put("/:id/:price", (req, res) => {
  getDB()
    .collection("products")
    .updateOne(
      { _id: new mongodb.ObjectID(req.params.id) },
      { $set: { price: req.params.price } }
    );
  res.status(200).send();
});

app.post("/updateall", (req, res) => {
  getDB()
    .collection("ovsklad")
    .updateMany({ $set: { type: "veg" } });
  res.status(200).send();
});

app.listen(PORT, () => {
  console.log("server is running!");
});
