const usersRouter = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../Auth/middlewares/restricted");
const checkDept = require("../Auth/middlewares/checkDept");

usersRouter.get("/", restricted, checkDept('BE'), (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json({
        loggedInUser: req.username,
        users
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err.message
      });
    });
});

module.exports = usersRouter;
