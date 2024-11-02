import { config } from "dotenv";
config()


import express from "express";



const app = express()



app.get('/', (req, res) => {
    res.status(200).json({
        message: 'E learning Ok',
        status: 200
    })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))