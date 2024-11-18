import express from "express"
import verifyToken from "../middleware/verifyToken.js"
import {login, register, logout, authCheck} from '../controller/userController.js'
import { createBook } from "../controller/bookController.js"
import User from "../model/User.js"
import Book from "../model/Book.js"

const app = express()
const router = express.Router()


router.post('/register', register)
router.post('/login', login)
router.get('/auth-check', verifyToken, authCheck)
router.get('/logout', verifyToken, logout)


router.post('/create-book/:user_id', verifyToken, createBook)

export default router