import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    username: {
        type: String,
        min: 3,
        unique: true,
        required: True
    },
    password: {
        type: String,
        min: 3,
        required: True
    },
})


const User = mongoose.model('User', userSchema)

export default User