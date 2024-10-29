import mongoose from "mongoose"
import * as path from 'path'
import { config } from "dotenv"

config({
    path: path.resolve(import.meta.dirname, '..', '.env')
})



mongoose.connect(process.env.MONGO)
.then(() => console.log('DB connected'))
.catch((err) => console.log(err))

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

const isiData = async() => {
    const user = new User({
        username: 'admin',
        password: 'mradmin',
        is_admin: false
    })

    try {
        // await user.save()
        console.log(1)
    } catch(err) {
        console.log(err)
    }
}

isiData()