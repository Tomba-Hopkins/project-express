import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import bcrypt from 'bcrypt'
import cors from 'cors'
config()

mongoose.connect(process.env.MONGO)
.then(() => console.log('DB connected'))
.catch((err) => console.log(err))


const Schema = mongoose.Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})
const User = mongoose.model('User', userSchema)

const app = express()
const PORT = process.env.PORT || 5000


// middleware
app.use(express.json()) // biar ngirimnya pake json bukan urlencoded form
app.use(cors({
    origin: '*'
}))



app.post('/api/register', async (req, res) => {
    const {username, password} = req.body
    console.log(username, password)
    const hashPasswd = await bcrypt.hash(password, 10)
    const user = new User({
        username,
        password: hashPasswd
    })
    await user.save()
    res.status(201).json({
        message: 'Add user successful',
        redirect: '/login',
        status: 201
    })
})


app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))