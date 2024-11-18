import Book from "../model/Book.js"
import User from "../model/User.js"

const createBook = async(req, res) => {
    const {user_id} = req.params
    const {title, content, author} = req.body

    const user = await User.findById(user_id)

    const book = new Book({
        title,
        content,
        author
    })
    user.books.push(book)
    await user.save()
    await book.save()
    res.status(201).json({
        message: 'New book added',
        status: 201,
        redirect: '/dashboard'
    })
}


export {createBook}