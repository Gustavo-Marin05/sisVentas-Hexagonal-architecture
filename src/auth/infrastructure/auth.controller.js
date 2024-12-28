import bcrypt from "bcryptjs/dist/bcrypt.js";
import {
  registerUser,
  loginUser,
  getProfile,
  deleteProfile,
} from "../application/authService.js";

import { createaccestoken } from "../../libs/jwt.js";

export const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.cookie("token", user.token);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await loginUser(username, password);
    res.cookie("token", user.token);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const logout = async (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  res.sendStatus(200);
};

export const profile = async (req, res) => {
  try {
    const user = await getProfile(req.user.id);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

export const profileDelete = async (req, res) => {
  try {
    const user = await deleteProfile(req.user.id);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
