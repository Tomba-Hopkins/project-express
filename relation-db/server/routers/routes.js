import express from "express"
import verifyToken from "../middleware/verifyToken.js"
import {login, register, logout, authCheck} from '../controller/userController.js'
import { createBook, getAllBooks, getBooks } from "../controller/bookController.js"
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


// router.get('/books/:book_id', async(req, res) => {
//     const {book_id} = req.params
//     const book = await Book.findById(book_id)
//     res.status(200).json({
//         message: 'Book already to read',
//         status: 200,
//         book
//     })
// })

export default router