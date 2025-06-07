import { nanoid } from "nanoid"
export const generateNanoId = async (length)=>{
 return nanoid(length);
}