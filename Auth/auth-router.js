const express = require('express');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const Users = require('../Users/users-model')
const db = require('../Users/users-model')

const authRouter = express.Router();

authRouter.post('/register', (req, res) => {
         const user = req.body
         const hash = bcrypt.hash(user.password, 10);
         user.password = hash
   Users.add()      
})



module.exports = authRouter