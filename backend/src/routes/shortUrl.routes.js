import { Router } from "express";
const router=Router();
import {createShortUrl} from "../controllers/shortUrl.controller.js"

router.post("/create",createShortUrl)

export default router;