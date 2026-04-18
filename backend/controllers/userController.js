import express from "express"
import { User } from "../models/userModel.js"
import bcryptjs from "bcryptjs"

export const register = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body
        if (!fullName || !userName || !password || !confirmPassword || !gender) {
            return res.status(400).json({
                success: false,
                message: "Data is required ,please fill tha field"
            })
        }

        if (password !== confirmPassword) {
            return res.status(404).json({
                success: false,
                message: "password is wrong that yo ujust enterned"
            })
        }

        const user = await User.findOne({ userName })

        if (user) {
            return res.send(400).json({
                success: false,
                message: "User is already exist"
            })
        }
        const hashPassword = await bcryptjs.hash(password, 10)
        await User.create({
            fullName,
            userName,
            password: hashPassword,
            gender,
            profilePhoto
        })



    } catch (error) {

    }
}