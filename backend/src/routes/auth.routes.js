import { Router } from "express";
const router=Router()
import {registerUser,loginUser,logOutUser,getMe} from "../controllers/auth.controller.js"

router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/logout",logOutUser)
router.get("/me",getMe)

export default router;