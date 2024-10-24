import express from "express";

import { configDotenv } from "dotenv";
configDotenv()



const app = express()
const dir = import.meta.dirname


app.set('view engine', 'ejs')
app.set('views', `${dir}/views`)

app.get('/', (req, res) => {
    res.render('home')
})


app.listen(process.env.PORT || 5000, () => console.log(`Started on http://localhost:5000`))