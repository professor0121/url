import { Router } from "express";
const router=Router();
import {createShortUrl} from "../controllers/shortUrl.controller.js"
import {authMiddleware} from "../middlewares/auth.middleware.js"

router.post("/create",authMiddleware,createShortUrl)
// router.post("customSlug",createCustomUrl)

export default router;