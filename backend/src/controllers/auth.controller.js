import { cookieOptions } from "../config/config.js";
import wrapAsync from "../utils/tryCatchWrapper.js";
import { register, login } from "../services/auth.service.js";
import jwt from "jsonwebtoken";

export const registerUser = wrapAsync(async (req, res) => {
        const { name, email, password } = req.body;
        const { token, newUser } = await register(name, email, password);
        // req.user=newUser
        res.cookie("accessToken", token, cookieOptions);
        res.status(200).json({ token: token, user: newUser })
})

export const loginUser = wrapAsync(async (req, res) => {
        const { email, password } = req.body;
        console.log(email, password)
        const { user, token } = await login(email, password);
        req.user = user
        console.log(req.user)
        res.cookie("accessToken", token, cookieOptions);
        res.status(200).json({ token: token, user: user })
})

export const logOutUser = wrapAsync(async (req, res) => {
        res.clearCookie("accessToken", cookieOptions); // Clear the cookie with the specified options
});

export const getMe = wrapAsync(async (req, res) => {
        const token = req.cookies.accessToken;
        if (!token) return res.status(401).json({ message: "Unauthorized" });
        const user = jwt.verify(token, process.env.JWT_SECRET);
        res.json({ user });
})