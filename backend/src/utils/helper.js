import { nanoid } from "nanoid"
export const generateNanoId = async (length)=>{
 const id=nanoid(length)
 console.log(id)
 return id;
}