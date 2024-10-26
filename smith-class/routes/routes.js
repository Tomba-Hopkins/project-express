import express from "express";


import { 
    getHomeUser,
    getCreateUser,
    createUser,
    getUserById,
    editUserById,
    deleteUserById,
    getEditUserPage

 } from "../controller/user.js";

const router = express.Router()

router.get('/', getHomeUser)


router.get('/create',getCreateUser)

router.get('/user/:id', getUserById)

router.put('/user/:id', editUserById)

router.delete('/user/:id', deleteUserById)

router.get('/user/:id/update', getEditUserPage)

router.post('/create', createUser)


export default router