import express from "express"
import dotenv from "dotenv"
import connectToMongoDB from "./db/connectiondb.js"
import authRouter from "./routes/authRouet.js"
import cookieParser from "cookie-parser"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRouter)

app.listen(process.env.PORT, () => {
    connectToMongoDB()
    console.log(`Server runing on port${process.env.PORT}`);
})