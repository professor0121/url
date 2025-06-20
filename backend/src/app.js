import express from "express";
import  connetDB from "./config/connectDb.js"
import shortUrlRoutes from "./routes/shortUrl.routes.js"
import authRoutes from "./routes/auth.routes.js"
import {redirectFromShortUrl} from "./controllers/shortUrl.controller.js"
import { errorHandler } from "./utils/errorHandler.js";
import cors from "cors";
import cookieParser from "cookie-parser";


connetDB();
const app = express();
app.use(cookieParser());
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    }
)); // Enable CORS for all routes
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Middlewares and routes here
app.use("/api/auth", authRoutes);
app.use("/api/url", shortUrlRoutes);
app.get("/:id",redirectFromShortUrl)

app.use(errorHandler)
export default app;
