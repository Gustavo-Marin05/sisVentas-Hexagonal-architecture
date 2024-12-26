import { registerUser,loginUser } from "../application/authService.js";

export const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.cookie('token', user.token);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  res.send("login");
};
