module.exports = role => (req, res, next) => {
  if (role === req.user.dept) {
    next();
  } else {
    res.status(403).json({
      message: "only BE developers can access this information "
    });
  }
};
