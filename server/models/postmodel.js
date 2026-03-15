import mongoose from "mongoose"
import { type } from "os"
import { ref } from "process"

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    },
    descritpion: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Post = mongoose.model("Post", postSchema)

export default Post