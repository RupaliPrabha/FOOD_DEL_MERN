const jwt = require("jsonwebtoken");
const express = require("express")
const app = express();
app.use(express.json());


const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Not Authrized Login Again" });
  }
  try {
    const token_decode = await jwt.verify(token, process.env.SECRET_KEY);
    if (!req.body) {
      req.body = {};
    }
    req.body.userId = token_decode.id ;
    next();
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: "Error" });
  }
};

module.exports = { authMiddleware };
