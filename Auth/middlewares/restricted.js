const jwt = require("jsonwebtoken");
const jwtSecret = require("../authSecrets");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtSecret.secret, (error, decodedToken) => {
      if (error) {
        res.status(401).status({
          message: error.message
        });
      } else {
        req.user = {
          username: decodedToken.username,
          dept:decodedToken.dept
        }
        next();
      }
    });
  } else {
    res.status(400).json({
      message: "no token provided"
    });
  }
};
