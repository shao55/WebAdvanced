const express = require("express");
const app = express();
const adminRouter = require("./routes/admin");
const timeRouter = require("./routes/time");

app.use(express.json());

app.use([adminRouter, timeRouter]);

app.listen(8000, () => {
  console.log("Sever listens on port 8000");
});
