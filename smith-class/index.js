import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import * as path from 'path'
import methodovr from 'method-override'
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


app.use(express.urlencoded({extended: true}))
app.use(methodovr('_metode'))



app.get('/', async (req, res) => {

    const users = await User.find({})
    // console.log(users)
    
    res.render('home', {
        users
    })
})


app.get('/create', (req, res) => {
    res.render('create')
})

app.get('/user/:id', async(req, res) => {
    const { id } = req.params
    const user = await User.findById(id)
    res.render('detail', {
        user
    })
})

app.put('/user/:id', async(req, res) => {
    const {id} = req.params
    const {username, password} = req.body

    await User.findByIdAndUpdate(id, {username, password})
    res.redirect('/')
})

app.delete('/user/:id', async(req, res) => {
    const {id} = req.params
    await User.findByIdAndDelete(id)
    res.redirect('/')
})

app.get('/user/:id/update', async(req, res) => {
    const { id } = req.params
    const user = await User.findById(id)
    res.render('update', {
        user
    })
})

app.post('/create', async(req, res) => {
    const {username, password, is_admin} = req.body
    const user = new User({
        username,
        password,
        is_admin
    })
    await user.save()
    res.redirect('/')
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Started on http://localhost:${port}`))