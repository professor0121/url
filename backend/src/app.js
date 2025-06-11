import express from "express";
import  connetDB from "./config/connectDb.js"
import shortUrlRoutes from "./routes/shortUrl.routes.js"
import {redirectFromShortUrl} from "./controllers/shortUrl.controller.js"
import { errorHandler } from "./utils/errorHandler.js";



connetDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Middlewares and routes here
app.use("/api/url", shortUrlRoutes);
app.get("/:id",redirectFromShortUrl)

app.use(errorHandler)
export default app;
