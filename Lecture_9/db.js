import { MongoClient as mongo } from "mongodb";

const url = "mongodb://127.0.0.1:27017";

let db = "";
const connect = () => {
  mongo.connect(url, (err, client) => {
    if (err) {
      console.log(err);
      return;
    }

    db = client.db("ovoshiandfrukty");
  });
};

const getDB = () => db;
export { connect, getDB };
