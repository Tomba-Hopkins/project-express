import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    is_admin: {
        type: Boolean,
        required: true,
        enum: [true, false]
    },
})


const User = mongoose.model('User', userSchema)


export default User