// const secret = require("crypto").randomBytes(64).toString("hex");

// console.log(secret);

const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
// JWT_SECRET_KEY

const app = express();

app.use(express.json());

app.get("/sendMoney", checkAuth, (req, res) => {
  const data = req.user;
  res.json({ status: 1, money: 5000, data });
});

app.post("/getToken", (req, res) => {
  const actoken = generateAccessToken(req.body.username);
  res.json(actoken);
});

function generateAccessToken(username) {
  const token = jwt.sign({ username }, process.env.TOKEN_SECRET, {
    expiresIn: "1h",
  });

  return token;
}

function checkAuth(req, res, next) {
  const header = req.headers["authorization"];

  //   "Bearer 328qvu0ner9o83v4ug934ro3qbu4nr9q034o8fj4orq34fjlriq4mjroi4"
  const token = header && header.split(" ")[1]; // AC token

  console.log("token: ");
  console.log(token);
  if (token == null) return res.status(401).send("not authorized");

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(401).send("not authorized");
    }
    req.user = user;

    next();
  });
}

app.listen(process.env.PORT);
