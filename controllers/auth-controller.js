const User = require("../models/user-model");
const bcrypt = require("bcryptjs"); 

const home = async (req, res) => {
  try {
    res.status(200).send("welcome  cal to Alumni");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "email alredy exists" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({
      msg: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json("internal server error ");
  }
};
//user login Logiic:

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({email});
    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({ message: "invalid credentials user wale "
      });
    }
    
      const user = await userExist.comparePassword(password);
    if (user) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid Email or Password" });
    }
  } catch (error) {
   // res.status(500).json("internal server login error");
  next(error);
  }
};

module.exports = { home, register, login };
