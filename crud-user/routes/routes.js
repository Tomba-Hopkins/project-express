import express from "express";


import { 
    getHomeUser,
    getCreateUser,

 } from "../controller/user.js";

const router = express.Router()

router.get('/', getHomeUser)
router.get('/create',getCreateUser)



export default router