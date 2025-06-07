import express from "express";
import { nanoid } from "nanoid";
import  connetDB from "./config/connectDb.js"
import UrlSchema from "./models/shortUrl.model.js"
import shortUrlRoutes from "./routes/shortUrl.routes.js"



connetDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Middlewares and routes here
app.use("/api/url", shortUrlRoutes);

app.get("/:urlId", async (req,res)=>{
  const {urlId}=req.params;
  console.log(urlId);
  const url=await UrlSchema.findOne({short_url:urlId})
  if(url){
    res.redirect(url.full_url)
  }else{
    res.status(400).json({message:"url not found"})
  }
})

export default app;
