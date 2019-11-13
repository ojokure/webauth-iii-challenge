const jwt = require("jsonwebtoken");
const jswtSecret = require("../authSecrets");

module.exports = (req, res, next) => {
  const token = req.header.authorization;

  if (token) {
    jwt.verify(token, jswtSecret.secret, (error, decodedToken) => {
      if (err) {
        res.status(401).status({
          message: error.message
        });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(500).json({
      message: "no token provided"
    });
  }
};
