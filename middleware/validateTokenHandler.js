const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validate = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization || req.headers.Authorization;
  console.log('authHeader',authHeader)
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    if(!token){
        res.status(401).json({ message: "Token is missing" });
      }
    console.log('token',token)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        console.log('errr',err)
        res.status(401).json({ message: "not valid" });
      }
      console.log("decoded", decoded);
      req.user= decoded.user;
      next();
    });
  }
});

module.exports = validate;
