import express from "express"
import { createUser, deleteUserById, editUserById, getEditUserPage, getUserById } from "../controller/user.js"

const router = express.Router()

router.get('/:id', getUserById)
router.put('/:id', editUserById)
router.delete('/:id', deleteUserById)
router.get('/:id/update', getEditUserPage)
router.post('/create', createUser)

export default router