const { createSecretToken } = require("../util/SecretToken");
const User = require("../Model/UsersModel");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, username, password, createdAt } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({
      email,
      username,
      password,
      createdAt,
    });

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (err) {
    console.error(err);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }

    let user = await User.findOne({ email });

    if (!user) {
      res.json({ message: "Incorrect password or email" });
    }

    let auth = await bcrypt.compare(password, user.password);

    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }

    let token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
    next();
  } catch (err) {
    console.error(err);
  }
};

module.exports.Logout = (req, res, next) => {
  let token = "";
  res.cookie("token", token);
  res
    .status(200)
    .json({ message: "User logged out successfully", success: true });
  next();
};
