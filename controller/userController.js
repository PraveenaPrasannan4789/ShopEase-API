const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');

//@desc post contact
//@route POST/api/users/register
//@access public
const register = asyncHandler(async (req, res) => {
  console.log("req.bodyyy", req.body);
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      res.status(400).json({ message: "All fields are mandatory" });
    }
    const userAvailable = await User.findOne({ email: email });
    if (userAvailable) {
      res.status(400).json({ message: "User already registered" });
    }
//hash password
const hash= await bcrypt.hash(password,10);
console.log('hash',hash);
    const user = await User.create({
      username,
      email,
      password:hash,
    });
    res
      .status(201)
      .json({ message: "Registered User successfully", user: user });
    console.log("user", user);
  } catch (err) {
    console.log("errr", err);
  }
});

//@desc post login
//@route POST/api/users/login
//@access public
const login = asyncHandler(async (req, res) => {
  const {email,password}= req.body;
  try {
    if (!email || !password) {
      res.status(400).json({ message: "All fields are mandatory" });
    }
    const userAvailable = await User.findOne({ email: email });
    if (userAvailable && bcrypt.compare(password,userAvailable.password)) {
      const accessToken=jwt.sign({
        user:{
          username:userAvailable.username,
          email:userAvailable.email,
          id:userAvailable.id
        },
      },process.env.ACCESS_TOKEN_SECRET,{expiresIn:'10m'})
      res.status(200).json({ accessToken });
    }
    else{
      res.status(401).json({ message: "username or password not valid" });
    }
  } catch (err) {
    console.log("errr", err);
  }
});

//@desc get contact
//@route GET/api/users/current
//@access private
const current = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "success current user" }); //no need to write try chatch
});

module.exports = {
  register,
  login,
  current,
};
