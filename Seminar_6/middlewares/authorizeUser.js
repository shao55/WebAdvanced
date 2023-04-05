const authorizeUser = (req, res, next) => {
  console.log("body from client: ");
  console.log(req.body);
  const name = req.body.name;
  const surname = req.body.surname;

  if (name && surname) {
    next();
  } else return res.status(400).send("Anouthorized");
};

module.exports = authorizeUser;
