import express from "express"
import { createBiodata, deleteBiodata } from "../controller/user.js"

const router = express.Router({
    mergeParams: true
})

router.post('/', createBiodata)
router.delete('/:biodata_id', deleteBiodata)

export default router