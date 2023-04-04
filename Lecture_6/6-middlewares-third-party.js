const express = require("express");

const logger = require("./middlewares/logger");
const authorize = require("./middlewares/authorization");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

const app = express();

// app.use(morgan("tiny"));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

app.use(cors());
app.use(helmet());
app.use(
    morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use("/user", [authorize, logger]);

app.get("/", (req, res) => {
    res.send("My App");
});

app.get("/about", (req, res) => {
    res.status(200).json({ page: "about", type: "cors" });
});

app.get("/user/:id", (req, res) => {
    const user = req.user;

    console.log("USER: ", user);
    res.send(`About ${user.name}`);
});

app.get("/user/:id", (req, res) => {
    res.send(`About ${req.params.id}`);
});

app.listen(5000);