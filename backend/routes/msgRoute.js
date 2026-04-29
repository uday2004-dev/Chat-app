import express from "express"
import { sendMsg } from "../controllers/messageController.js"
 const router=express.Router()


 router.post("/sender/:id",sendMsg)


 export default router