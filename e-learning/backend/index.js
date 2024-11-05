import { config } from "dotenv";

import mongoose from "mongoose";
import express from "express";


const Schema = mongoose.Schema
config()


const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
})


const User = mongoose.model('User', userSchema)


const app = express()



app.get('/login', (req, res) => {
    res.status(200).json({
        message: 'Get login page',
        status: 200
    })
})

app.get('/register', (req, res) => {
    res.status(200).json({
        message: 'Get register page',
        status: 200
    })
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))