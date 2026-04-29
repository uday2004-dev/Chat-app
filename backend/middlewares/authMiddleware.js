import express from "express"
import jwt from "jsonwebtoken"

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "You are not authenticated"
            })
        }
        const decode = await jwt.verify(token, process.env.JWT_SECRET)
        if (!decode) {
            return res.status(401).json({ message: "Invalid Token" })
        };
        req.id = decode.userId;
        next()
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success: false,
            message: "Token is invalid or expired"
        });
    }

}

export default isAuthenticated;

