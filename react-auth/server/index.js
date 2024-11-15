import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import bcrypt from 'bcrypt'
import cors from 'cors'
import cookieParser from "cookie-parser";
import jwt from 'jsonwebtoken'
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
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(cookieParser())


const verifyToken = (req, res, next) => {
    const {kuki} = req.cookies
    if(!kuki) return res.status(403).json({
        message: 'Not authorized',
        status: 403,
        redirect: '/login'
    })

    jwt.verify(kuki, process.env.JWT, (err, decode) => {
        if(err) return res.status(403).json({
            message: 'Not authorized',
            status: 403,
            redirect: '/login'
        })
        req.user = decode
        next()
    })

}



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

app.post('/api/login', async(req, res) => {

    const {username, password} = req.body
    
    const user = await User.findOne({username})

    
    if(!user || !await bcrypt.compare(password, user.password)) return res.status(404).json({
        message: 'Not found',
        status: 404,
        redirect: '/login'
    })


    const token = jwt.sign({username}, process.env.JWT, {
        expiresIn: '1h',
    })

    res.cookie('kuki', token, {
        httpOnly: true
    })


    res.status(200).json({
        message: 'Login success',
        status: 200,
        redirect: '/dashboard'
    })
    
})


app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))