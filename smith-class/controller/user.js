import User from "../models/user.js"

export const getHomeUser = async (req, res) => {
    const users = await User.find({})
    res.render('home', {
        users
    })
}


export const getCreateUser =  (req, res) => {
    res.render('create')
}


export const getUserById = async(req, res) => {
    const { id } = req.params
    const user = await User.findById(id)
    res.render('detail', {
        user
    })
}


export const editUserById = async(req, res) => {
    const {id} = req.params
    const {username, password} = req.body

    await User.findByIdAndUpdate(id, {username, password})
    res.redirect('/')
}



export const deleteUserById = async(req, res) => {
    const {id} = req.params
    await User.findByIdAndDelete(id)
    res.redirect('/')
}


export const getEditUserPage = async(req, res) => {
    const { id } = req.params
    const user = await User.findById(id)
    res.render('update', {
        user
    })
}


export const createUser = async(req, res) => {
    const {username, password, is_admin} = req.body
    const user = new User({
        username,
        password,
        is_admin
    })
    await user.save()
    res.redirect('/')
}