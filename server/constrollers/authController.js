import User from "../models/usermodel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const registerUser = async (req, res) => {
    const { email, fullName, password, role, ...rest } = req.body
    try {
        const checkExsits = await User.findOne({ email })

        if (checkExsits) {
            res.status(400).json({ message: "User with this email alreday exsits" })
        }

        if (!fullName || !password || !email) {
            res.status(401).json({ message: "All fildes required" })
        }
        if (role && (role !== "user" && role !== "admin")) {
            res.status(400).json({ message: "Invalid role!" })
        }
        const passHash = await bcrypt.hash(password, 10)


        const neweUser = await User.create({
            fullName,
            email,
            password: passHash,
            role,
            ...rest
        })
        res.status(201).json({ message: "User registerd seccsefuly", neweUser })
    } catch (error) {
        res.status(400).json({ message: "error", info: error.message })
    }
}


export const loginUser = async (req, res) => {
    try {
        const { email } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({ message: "Error user not exsits" })
        }

        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.SECRET_KEY, { expiresIn: "1h" })

        res.status(201).cookie("token", token, { httpOnly: true }).json({
            message: "Login seccesfuly", user
        })
    } catch (error) {
        res.status(500).json({ message: "Server erorr", error: erorr.message})
    }
}
