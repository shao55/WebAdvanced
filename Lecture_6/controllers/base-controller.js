const axios = require("axios");

//REST API
// fetch-node

const getPeople = async () => {
    const res = await axios
        .get("https://swapi.dev/api/people")
        .then((res) => res.data)
        .then((res) => {
            console.log("res1", res);
            return res;
        })
        .catch((err) => console.log(err));
    return res;
};

const getBaseController = async (req, res) => {
    const swData = await getPeople();
    console.log("res2", swData);

    try {
        res.status(200).send(swData);
    } catch {
        res.status(401).json({ data: "no data available" });
    }
};

const postBaseController = (req, res) => {
    console.log("some logic here");
    console.log("some logic here");
    console.log("some logic here");
    res.status(200).send("POST");
};

module.exports = { getBaseController, postBaseController };