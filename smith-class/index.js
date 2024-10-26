import express from "express";
import { config } from "dotenv";
import * as path from 'path'
import methodovr from 'method-override'
import connectDB from './config/db.js'
import router from "./routes/routes.js";

config()
connectDB()

const app = express()


app.set('view engine', 'ejs')
app.set('views', path.join(import.meta.dirname,'views'))


app.use(express.urlencoded({extended: true}))
app.use(methodovr('_metode'))
app.use('/', router)


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Started on http://localhost:${port}`))