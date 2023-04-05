const checkAuthorizeFromAdmin = (req, res, next) => {
  if (req.body.name === "Dalida" && req.body.surname === "Wimbledon") {
    req.is_dalida = "True";
    res.set("is_dalida", "True");
    next();
  } else return res.status(200).send("Not Dalida");
};

module.exports = checkAuthorizeFromAdmin;
