const usersRouter = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../Auth/middlewares/restricted");

usersRouter.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({
        error: err.message
      });
    });
});

module.exports = usersRouter;
