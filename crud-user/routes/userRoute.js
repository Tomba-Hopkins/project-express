import express from "express"
import { createUser, deleteUserById, editUserById, getEditUserPage, getUserById } from "../controller/user.js"
import NgawurId from "../middleware/NgawurId.js"


const router = express.Router()

router.get('/:id',NgawurId('/'), getUserById) // ngawurId itu middleware
router.put('/:id', editUserById)
router.delete('/:id', deleteUserById)
router.get('/:id/update', getEditUserPage)
router.post('/create', createUser)

export default router