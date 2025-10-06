const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, 'your_secret_key', {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
