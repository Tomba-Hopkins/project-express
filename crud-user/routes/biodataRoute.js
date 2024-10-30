import express from "express"
import { createBiodata, deleteBiodata } from "../controller/user.js"

const router = express.Router({
    mergeParams: true // biar bisa pake /:user_id
})

router.post('/', createBiodata)
router.delete('/:biodata_id', deleteBiodata)

export default router