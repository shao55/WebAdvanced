const checkAdmin = (req, res) => {
  if (req.headers["is_dalida"] === "True") {
    return res.status(200).send("Hello Boss!");
  } else return res.status(403).send("Forbidden :(");
};

module.exports = checkAdmin;
