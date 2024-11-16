import express from "express"
import verifyToken from "../middleware/verifyToken.js"
import {login, register, logout, authCheck} from '../controller/userController.js'

const router = express.Router()


router.post('/register', register)

router.post('/login', login)

router.get('/auth-check', verifyToken, authCheck)


router.get('/logout', verifyToken, logout)

export default router