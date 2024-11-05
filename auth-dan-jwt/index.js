import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import * as path from 'path'
import ejsmate from 'ejs-mate'
config()
mongoose.connect(process.env.MONGO)
.then(() => console.log(`DB Connected`))
.catch((err) => console.log(err))


const app = express()
app.set('view engine', 'ejs')
app.set('views', path.join(import.meta.dirname, 'views'))


app.use(express.static(path.join(import.meta.dirname, 'public')))

app.engine('ejs', ejsmate)



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