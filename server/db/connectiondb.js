import mongoose from "mongoose";
import { log } from "node:console";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to monGoDB")

    } catch (error) {
        console.log("Error connecting to DB", error.message);
    }
}

export default connectToMongoDB