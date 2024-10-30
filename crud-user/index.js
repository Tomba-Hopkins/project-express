import express from "express";
import { config } from "dotenv";
import * as path from 'path'
import methodovr from 'method-override'
import connectDB from './config/db.js'
import router from "./routes/routes.js";
import userRouter from "./routes/userRoute.js"
import biodataRoute from "./routes/biodataRoute.js"
import ejsmate from 'ejs-mate'
import MyError from "./utils/myError.js";
import session from "express-session";
import flash from 'connect-flash'


// buat db biodata nanti
config()
connectDB()

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(import.meta.dirname,'views'))

app.engine('ejs', ejsmate)

app.use(express.urlencoded({extended: true}))
app.use(methodovr('_metode'))
app.use(session({
    secret: 'rahasiaini',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        expires: Date.now() * 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))
app.use(flash())


// middleware buat flash
app.use((req, res, next) => {
    res.locals.berhasil = req.flash('succ')
    res.locals.gagal = req.flash('err')
    next()
})

// statis buat tailwind -> nanti jadi /img/1.jpg gausah /public/img/1.jpg
app.use(express.static(path.join(import.meta.dirname, 'src')))
app.use(express.static(path.join(import.meta.dirname, 'public')))


app.use('/', router)
app.use('/user', userRouter) // dari /user/create jadi -> /create aja nanti di file routesnya
app.use('/user/:user_id/biodata', biodataRoute) // ngikut param di controller y jadi /:user_id





app.all("*", (req, res, next) => {
    next(new MyError('Gada kocag', 404))
})

app.use((err, req, res, next) => {
    const {kode = 500} = err
    if(!err.pesan) err.pesan = "Ya error lah pokoknya"
    
    return res.status(kode).render('error', {
        err
    })
})


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Started on http://localhost:${port}`))