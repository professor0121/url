import express from "express";
import  connetDB from "./config/connectDb.js"
import shortUrlRoutes from "./routes/shortUrl.routes.js"
import {redirectFromShortUrl} from "./controllers/shortUrl.controller.js"
import { errorHandler } from "./utils/errorHandler.js";
import cors from "cors";


connetDB();
const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Middlewares and routes here
app.use("/api/url", shortUrlRoutes);
app.get("/:id",redirectFromShortUrl)

app.use(errorHandler)
export default app;
