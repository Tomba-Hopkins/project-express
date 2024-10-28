import User from "../models/user.js"
import Wrap from "../utils/Wrap.js"

export const getHomeUser = Wrap(async (req, res) => {
    const users = await User.find({})
    res.render('home', {
        users
    })
})


export const getCreateUser =  Wrap((req, res) => {
    res.render('create')
})


export const getUserById = Wrap(async(req, res) => {
    const { id } = req.params
    const user = await User.findById(id)
    res.render('detail', {
        user
    })
})


export const editUserById = Wrap(async(req, res) => {
    const {id} = req.params
    const {username, password} = req.body

    await User.findByIdAndUpdate(id, {username, password})
    res.redirect('/')
})



export const deleteUserById = Wrap(async(req, res) => {
    const {id} = req.params
    await User.findByIdAndDelete(id)
    res.redirect('/')
})


export const getEditUserPage = Wrap(async(req, res) => {
    const { id } = req.params
    const user = await User.findById(id)
    res.render('update', {
        user
    })
})


export const createUser = Wrap(async(req, res) => {
    const {username, password, is_admin} = req.body
    const user = new User({
        username,
        password,
        is_admin
    })
    await user.save()
    res.redirect('/')
})