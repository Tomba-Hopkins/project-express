import { config } from "dotenv";
import mongoose from "mongoose";
import express from "express";
import * as path from 'path'
import ejsmate from 'ejs-mate'
import bcrypt from 'bcrypt'

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

const User = mongoose.model('User', userSchema)


const app = express()

app.set('views', path.join(import.meta.dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('ejs', ejsmate)

app.use(express.urlencoded({extended: true}))


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


app.get('/profile', (req, res) => {
    res.render('profile')
})


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Started on http://localhost:${port}`))