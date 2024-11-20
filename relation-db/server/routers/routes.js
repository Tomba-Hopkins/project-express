import express from "express"
import verifyToken from "../middleware/verifyToken.js"
import {login, register, logout, authCheck} from '../controller/userController.js'
import { createBook, getAllBooks, getBookDetail, getBooks } from "../controller/bookController.js"
import User from "../model/User.js"
import Book from "../model/Book.js"

const app = express()
const router = express.Router()


router.post('/register', register)
router.post('/login', login)
router.get('/auth-check', verifyToken, authCheck)
router.get('/logout', verifyToken, logout)


router.post('/create-book/:user_id', verifyToken, createBook)
router.get('/books/:user_id', verifyToken, getBooks)
router.get('/library', verifyToken, getAllBooks)


router.get('/books/detail/:book_id',verifyToken, getBookDetail)

export default router