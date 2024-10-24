import express from "express";

const app = express()
const dir = import.meta.dirname


app.set('views', `${dir}/views`)
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('home')
})


app.listen(5000, () => console.log(`Started on http://localhost:5000`))