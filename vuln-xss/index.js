import { config } from "dotenv";
import mongoose from "mongoose";
import express from "express";
import * as path from 'path'
import ejsmate from 'ejs-mate'

config()

mongoose.connect(process.env.MONGO)
.then(() => console.log('DB connected'))
.catch(err => console.log(err))


const app = express()

app.set('views', path.join(import.meta.dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('ejs', ejsmate)


app.get('/', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})
app.get('/profile', (req, res) => {
    res.render('profile')
})


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Started on http://localhost:${port}`))