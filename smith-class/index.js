import express from "express";
import { config } from "dotenv";
import * as path from 'path'
import methodovr from 'method-override'
import connectDB from './config/db.js'
import router from "./routes/routes.js";
import ejsmate from 'ejs-mate'
import MyError from "./utils/myError.js";

// buat db biodata nanti
config()
connectDB()

const app = express()


app.set('view engine', 'ejs')
app.set('views', path.join(import.meta.dirname,'views'))

app.engine('ejs', ejsmate)

app.use(express.urlencoded({extended: true}))
app.use(methodovr('_metode'))
app.use('/', router)

// statis buat tailwind
app.use(express.static(path.join(import.meta.dirname, 'src')))


app.all("*", (req, res, next) => {
    next(new MyError('Gada kocag', 404))
})

app.use((err, req, res, next) => {
    const {kode = 500} = err
    if(!err.pesan) err.pesan = "Ya error lah pokoknya"
    
    res.status(kode).render('error', {
        err
    })
})


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Started on http://localhost:${port}`))