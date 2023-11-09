// authMiddleware.js
const jwt = require("../configuration/jwt");

module.exports = (req, res, next) => {
  const token = req.header("X_auth_token");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
