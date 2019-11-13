const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bcrypt = require("bcrypt");

const server = express();

server.use(helmet());
server.use(cors());
server.use(bcrypt());
server.use(express.json());


server.get('/', (req, res) => {
    res.send('<h2> Hell Yeah </>')
})
