import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";

import cors from 'cors'
import cookieParser from "cookie-parser";

import router from "./routers/routes.js";
config()

mongoose.connect(process.env.MONGO)
.then(() => console.log('DB connected'))
.catch((err) => console.log(err))


const app = express()
const PORT = process.env.PORT || 5000


// middleware
app.use(express.json()) // biar ngirimnya pake json bukan urlencoded form
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(cookieParser())


app.use('/api', router)





app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))