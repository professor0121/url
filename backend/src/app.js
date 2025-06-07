import express from "express";
import { nanoid } from "nanoid";
import  connetDB from "./config/connectDb.js"
connetDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Middlewares and routes here
app.post("/", (req, res) => {
  const {url}=req.body;
  console.log(req.body)
  console.log(url)
  res.send(nanoid(7));
});

export default app;
