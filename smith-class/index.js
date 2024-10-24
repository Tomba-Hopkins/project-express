import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import * as path from 'path'
config()

const app = express()

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



app.set('view engine', 'ejs')
app.set('views', path.join(import.meta.dirname,'views'))



app.get('/', async (req, res) => {

    const users = await User.find({})
    console.log(users)
    
    res.render('home', {
        users
    })
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Started on http://localhost:${port}`))