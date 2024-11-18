import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../model/User.js'

const register = async (req, res) => {
    const {username, password} = req.body
    console.log(username, password)
    const hashPasswd = await bcrypt.hash(password, 10)
    const user = new User({
        username,
        password: hashPasswd
    })
    await user.save()
    res.status(201).json({
        message: 'Add user successful',
        redirect: '/login',
        status: 201
    })
}


const login = async(req, res) => {

    const {username, password} = req.body
    
    const user = await User.findOne({username})

    
    if(!user || !await bcrypt.compare(password, user.password)) return res.status(404).json({
        message: 'Not found',
        status: 404,
        redirect: '/login'
    })


    const token = jwt.sign({username, _id: user._id}, process.env.JWT, {
        expiresIn: '1h',
    })

    res.cookie('kuki', token, {
        httpOnly: true
    })


    res.status(200).json({
        message: 'Login success',
        status: 200,
        redirect: '/dashboard'
    })
    
}

const authCheck = async(req, res) => {
    res.status(200).json({
        user_id: req.useroi._id,
        username: req.useroi.username
    })
}


const logout = async(req, res) => {
    res.clearCookie('kuki', {
        httpOnly: true,
    })

    res.status(200).json({
        message: 'Loggout success',
        status: 200,
        redirect: '/login'
    })
}


export {register, login, authCheck, logout}