import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import * as path from 'path'
import ejsmate from 'ejs-mate'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookieParser from "cookie-parser";

config()
mongoose.connect(process.env.MONGO)
.then(() => console.log(`DB Connected`))
.catch((err) => console.log(err))

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        min: 3,
        unique: true,
        required: true
    },
    password: {
        type: String,
        min: 3,
        required: true
    },
})


const User = mongoose.model('User', userSchema)


const app = express()
app.set('view engine', 'ejs')
app.set('views', path.join(import.meta.dirname, 'views'))
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


app.use(express.static(path.join(import.meta.dirname, 'public')))

app.engine('ejs', ejsmate)


app.get('/', (req, res) => {
    res.render('dashboard')
})


app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async(req, res) => {
    try {
        const {username, password} = req.body
        const hashedPw = await bcrypt.hash(password, 10)
        const user = new User({username, password: hashedPw})
        await user.save()
        res.status(201).redirect('/login') // harus pilih 1 jir mau json atau redirect
        
    } catch (err) {
        res.status(500).redirect('/register')
    }
})


app.post('/login', async(req, res) => {
    const {username, password} = req.body
    const user = await User.findOne({username: username})

    if(!user || !bcrypt.compare(password, user.password)){
        res.status(404).redirect('/login')
    }


    const token = jwt.sign({username: user.username}, process.env.JWT, {expiresIn: '1h'})
    res.cookie('trackingID', token)


    res.status(200).redirect('/profile')
})


const verifyToken = (req, res, next) => {
    const {trackingID} = req.cookies
    
    if(!trackingID) return res.redirect('/login')
    
    jwt.verify(trackingID, process.env.JWT, (err, decode) => {
        if(err) return res.redirect('/login')
        req.pengguna = decode
        next()
    })
}


app.get('/profile',verifyToken, (req, res) => {
    res.render('profile', {
        uname: req.pengguna.username,
        comment: ''
    })
})

app.post('/comment',verifyToken, (req, res) => {
    const {comment} = req.body
    res.render('profile', {
        uname: req.pengguna.username,
        comment: comment
    })
})


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Started on http://localhost:${port}`))