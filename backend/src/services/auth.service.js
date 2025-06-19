import { findUserByEmail, findUserByEmailByPassword, createUser } from "../dao/user.dao.js";
import { ConflictError } from "../utils/errorHandler.js";
import { signToken } from "../utils/helper.js";

export const register = async (name, email, password) => {
  const user = await findUserByEmail(email);
  if (user) {
    throw new ConflictError("User already exists");
  }
  const newUser = await createUser(name, email, password);
  const token = signToken({ id: newUser._id });
  return {token ,newUser};
};

export const login = async (email, password) => {
  const user = await findUserByEmailByPassword(email);
  if (!user) {
    throw new Error("User not found");
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }
  const token = signToken({ id: user._id });
  return { user, token };
};
