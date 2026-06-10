import express from "express"
import { Conversation } from "../models/conversation.js";
import { Message } from "../models/message.js"
// import { getReceiverSocketId } from "../socket/socket.js";
import { getReceiverSocketId, io } from "../socket/socket.js";


export const sendMsg = async (req, res) => {
    try {
        const senderId = req.id;
        const receiverId = req.params.id;
        const { message } = req.body
        let gotConversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })
        if (!gotConversation) {
            gotConversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }
        const newMsg = await Message.create({
            senderId,
            receiverId,
            message
        })
        if (newMsg) {
            gotConversation.messages.push(newMsg._id)
        }
        await gotConversation.save()

        const receiverSocketId = getReceiverSocketId(receiverId)
        if (receiverSocketId) {
            io.to(receiverSocketId).emit(
                "newMessage",
                newMsg
            );
        }

        return res.status(201).json({
            success: true,
            message: newMsg,
            newMsg

        })
        //socket.io

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }

}



// export const getMsg = async (req, res) => {
//     try {

//         const receiverId = req.params.id
//         const senderId = req.id

//         const conversation = await Conversation.findOne({
//             participants: { $all: [senderId, receiverId] }
//         }).populate("messages") // Populate mongoose ka feature hai jo referenced ObjectIds ko actual related documents me replace karta hai.

//         console.log(conversation.messages)

//         return res.status(200).json({
//             success: true,
//             messages: conversation?.messages
//         })

//     } catch (error) {

//         console.log(error)

//         return res.status(500).json({
//             success: false,
//             message: "Internal server error"
//         })
//     }
// }



export const getMsg = async (req, res) => {
    try {

        const receiverId = req.params.id
        const senderId = req.id

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        }).populate("messages")

        // agar conversation nahi mili
        if (!conversation) {
            return res.status(200).json({
                success: true,
                messages: []
            })
        }

        console.log(conversation.messages)

        return res.status(200).json({
            success: true,
            messages: conversation.messages
        })

    } catch (error) {

        console.log(error)

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}



