import express from "express"
import dotenv from "dotenv"
import connectToMongoDB from "./db/connectiondb.js"

dotenv.config()

const app = express()

app.use(express.json())

app.get("/", (req, res, next) => {
    res.status(200).json({ message: "Welcome" })
})
app.listen(process.env.PORT, () => {
    connectToMongoDB()
    console.log(`Server runing on port${process.env.PORT}`);
})