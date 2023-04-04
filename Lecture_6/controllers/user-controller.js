const putUserController = (req, res) => {
    console.log("PUT");
    res.status(200).send({ user: "user", id: "3" });
  };
  
  const deleteUserController = (req, res) => {
    console.log("delete");
    res.status(200).json({ user: "user", id: "3", isDeleted: true });
  };
  
  module.exports = { putUserController, deleteUserController };