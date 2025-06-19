import { nanoid } from "nanoid"
import jsonwebtoken from "jsonwebtoken"
import { cookieOptions } from "../config/config.js"


export const generateNanoId = async (length) => {
    const id = nanoid(length)
    console.log(id)
    return id;
}


export const signToken = (payload) =>{
    return jsonwebtoken.sign(payload, process.env.JWT_SECRET);
    // return jsonwebtoken.sign(payload, process.env.JWT_SECRET, cookieOptions);
}

export const verifyToken = (token) =>{
    return jsonwebtoken.verify(token, process.env.JWT_SECRET);
}