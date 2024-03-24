const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const hashingOption = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  try {
    if (!req.body || !req.body.password) {
      throw new Error("Password is missing in the request body");
    }
    const { password } = req.body;

    const hashedPassword = await argon2.hash(password, hashingOption);
    req.body.hashedPassword = hashedPassword;
    delete req.body.password;
    next();
  } catch (error) {
    next(error);
  }
};

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.auth;

    await jwt.verify(token, process.env.APP_SECRET);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  hashPassword,
  verifyToken,
};
