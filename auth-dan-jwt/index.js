import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import * as path from 'path'
config()
mongoose.connect(process.env.MONGO, () => console.log('DB Connected'))



const app = express()
app.use('view engine', 'ejs')
app.use('views', path.join(import.meta.dirname, 'views'))
app.use(express.static(path.join(import.meta.dirname, 'public')))



app.get('/', (req, res) => {
    res.render('profile')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/register', (req, res) => {
    res.render('register')
})



const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Started on http://localhost:${port}`))