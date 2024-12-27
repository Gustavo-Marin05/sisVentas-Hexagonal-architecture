import User from "../domain/User.js";
import bcrypt from "bcryptjs";
import { createaccestoken } from "../../libs/jwt.js";

export const registerUser = async (userData) => {
  const { fullname, username, password } = userData;

  try {
    const userFound = await User.findOne({ username });

    if (userFound) return ["Este nombre de usuario ya está en uso"];
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullname,
      username,
      password: passwordHash,
    });

    const userSaved = await newUser.save();
    const token = await createaccestoken({ id: userSaved._id });

    return {
      id: userSaved._id,
      fullname: userSaved.fullname,
      username: userSaved.username,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
      token,
    };
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (username, password) => {
  const userFound = await User.findOne({ username });
  if (!userFound) return( ["no existe el nombre de usuario"]);

  const isMach = await bcrypt.compare(password, userFound.password);
  if (!isMach) return (["la contraceña es incorrecta"]);

  const token = await createaccestoken({ id: userFound._id });

  return {
    id: userFound._id,
    fullname: userFound.fullname,
    username: userFound.username,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
    token,
  };
};

export const profileUser= async ()=>{

}
