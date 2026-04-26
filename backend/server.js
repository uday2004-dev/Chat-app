import express from "express"
import dotenv, { config } from "dotenv"
import connectDB from "./config/connectDB.js";
import userRoutes from "./routes/userRoutes.js"
dotenv.config()
const app=express()
const PORT=process.env.PORT
 app.use(express.json())

//routes

app.use("/api/v1/user",userRoutes)


app.get("/",(req,res)=>{
    res.send("You are on Home Page")
})

app.listen(PORT,()=>{
    connectDB()
    console.log(`server is running on port number ${PORT}`)
})