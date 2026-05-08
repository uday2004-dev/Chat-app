import express from "express"
import { getMsg, sendMsg } from "../controllers/messageController.js"
import isAuthenticated from "../middlewares/authMiddleware.js"
 const router=express.Router()


 router.post("/send/:id",isAuthenticated,sendMsg)
 router.get("/:id",isAuthenticated,getMsg)


 export default router