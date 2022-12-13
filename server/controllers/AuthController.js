import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const categories = [
    { label: "Travel", icon: "user" },
    { label: "Shopping", icon: "user" },
    { label: "Investment", icon: "user" },
    { label: "Bills", icon: "user" },
  ];
  const { email, password, firstName, lastName } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(406).send({ message: "User is alreasy there" });
    return;
  } else {
    const saltRounds = 10;
    const salt = await bcrypt.genSaltSync(saltRounds);
    const hashedPassword = await bcrypt.hashSync(password, salt);

    const user = await User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      categories,
    });
    const savedUser = await user.save();

    console.log(savedUser);
  }
  res.status(201).send({ message: "Register Successfully" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(406).send({ message: "Credentials not found" });
    return;
  }

  const matched = await bcrypt.compare(password, user.password);
  if (!matched) {
    res.status(406).send({ message: "Credentials not found" });
    return;
  }

  // jwt token
  const payload = {
    username: email,
    _id: user._id,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  res.json({ message: "succesfully logged in", token, user });
};
