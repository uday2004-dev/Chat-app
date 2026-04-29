import { User } from "../models/userModel.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
export const register = async (req, res) => {
    try {
        console.log("BODY:", req.body);
        const { fullName, userName, password, confirmPassword, gender } = req.body;

        if (!fullName || !userName || !password || !confirmPassword || !gender) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match"
            });
        }

        const user = await User.findOne({ userName });

        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        const hashPassword = await bcryptjs.hash(password, 10);

        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const newUser = await User.create({
            fullName,
            userName,
            password: hashPassword,
            gender,
            profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
        });


        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: newUser
        });

    } catch (error) {
        console.log(error); // debug ke liye
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};


export const login = async (req, res) => {
    try {
        const { userName, password } = req.body

        if (!userName || !password) {
            return res.status(400).json({
                success: false,
                message: "login fail id and password are not matching"
            })
        };

        const user = await User.findOne({ userName })
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Incorrect password and user"
            })
        }
        const isPasswordMatched = await bcryptjs.compare(password, user.password)
        // console.log(isPasswordMatched)

        if (!isPasswordMatched) {
            return res.status(401).json({
                success: false,
                message: "Please enter valid password"
            })
        };

        const tokenData = {
            userId: user._id,

        }
        const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: "30m" })
        res.status(200).cookie("token", token,
            {
                maxAge: 1 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                sameSite: "strict"
            },

        ).json({
            _id: user._id,
            userName: user.userName,
            fullName: user.fullName,
            profilePhoto: user.profilePhoto,

        })


    } catch (error) {
        return res.json({
            success: false,
            message: "Something went wrong"
        })
    }

}

export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", {
            maxAge: 0,
            httpOnly: true,
            sameSite: "strict"
        })
    } catch (error) {
        console.log(error)
    }

}


export const getOtherUsers = async (req, res) => {
    try {
        const loggedInId = req.id;
        // const otherUser=await User.findOne({_id:{$ne:loggedInId}}).select("-password")
        const otherUsers = await User.find({
            _id: { $ne: loggedInId }
        }).select("-password");
        return res.status(200).json(otherUsers)
    } catch (error) {
        console.log(error)
    }

}