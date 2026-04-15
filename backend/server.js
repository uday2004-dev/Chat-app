import express from "express"
import dotenv, { config } from "dotenv"
import connectDB from "./config/connectDB.js";
dotenv.config()
const app=express()
const PORT=process.env.PORT


app.get("/",(req,res)=>{
    res.send("You are on Home Page")
})

app.listen(PORT,()=>{
    console.log(`server is running on port number ${PORT}`)
})