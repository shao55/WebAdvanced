const checkDateFormat = (req, res, next) => {
  if (req.headers["format"] === "DD.MM.YYYY") {
    const date = new Date();

    return res
      .status(200)
      .send(JSON.stringify(date.getTime() + " | " + date.getFullYear()));
  }
  return res.status(200).send("Wrong Format");
};

module.exports = checkDateFormat;
