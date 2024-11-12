import { config } from "dotenv";
import mongoose from "mongoose";
import express from "express";
import * as path from 'path'
import ejsmate from 'ejs-mate'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookieParser from "cookie-parser";

config()

mongoose.connect(process.env.MONGO)
.then(() => console.log('DB connected'))
.catch(err => console.log(err))


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

const quotesSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema)
const Quote = mongoose.model('Quote', quotesSchema)


const app = express()

app.set('views', path.join(import.meta.dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('ejs', ejsmate)

app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


// middleware
const verifyCookie = (req, res, next) => {
    const {nastar_cookie} = req.cookies
    if(!nastar_cookie) return res.redirect('/')
    
    jwt.verify(nastar_cookie, process.env.JWT, (err, decode) => {
        if(err) return res.redirect('/')
        req.user = decode
        next()
    })
}



app.get('/', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async(req, res) => {
    const {username, password} = req.body
    const newPasswd = await bcrypt.hash(password, 10)
    const user = new User({username, password: newPasswd})
    await user.save()
    res.status(201).redirect('/')
})


app.post('/login', async(req, res) => {
    const {username, password} = req.body
    const user = await User.findOne({username})

    if(!user || !bcrypt.compare(password, user.password)) return res.status(404).redirect('/')

    const token = jwt.sign({username}, process.env.JWT, {expiresIn: '1h'})
    res.cookie('nastar_cookie', token)
    
    res.status(200).redirect('/profile')
})



app.get('/profile', verifyCookie, async (req, res) => {

    const quotes = await Quote.find({})
    
    res.render('profile', {
        username: req.user.username,
        quotes
    })
})


app.post('/quotes',verifyCookie, async(req, res) => {

    const {quote} = req.body
    const {username} = req.user
    
    
    const newQuote = new Quote({
        author: username,
        quote,
    })

    await newQuote.save()
    res.status(201).redirect('/profile')
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Started on http://localhost:${port}`))