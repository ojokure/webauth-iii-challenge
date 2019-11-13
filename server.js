const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require('./Auth/auth-router');
const usersRouter = require('./Users/user-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter)
server.use('/api/users', usersRouter)

server.get("/", (req, res) => {
  res.send("<h2> Hell Yeah </>");
});

module.exports = server;
