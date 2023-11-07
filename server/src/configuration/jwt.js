const jwt = require("jsonwebtoken");

const secretKey = "QAZwsx!2#EDCrfv";

module.exports = {
  sign: (data) => jwt.sign(data, secretKey, { expiresIn: "2h" }),
  verify: (token) => jwt.verify(token, secretKey),
};
