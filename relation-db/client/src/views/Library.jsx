import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Library(){
    const navigate = useNavigate()
    const [books, setBooks] = useState([])

    useEffect(() => {
        const getAllBooks = async () => {
            try {
                const result = await axios.get('http://localhost:5000/api/library')
                // console.log(result.data)
                setBooks(result.data.books)
            } catch (error) {
                console.log(error)
                navigate('/login')
                
            }
        }
        getAllBooks()
    
    }, [navigate])

    const detailBookPage = (id) => {
        try {
            navigate(`/books/${id}`)
        } catch (err) {
            console.log(err)
            navigate('/library')
        }
    }
    
    
    return (
        <section className="w-full text-center p-8">
            <h2 className="text-2xl font-semibold my-4 bg-gradient-to-r from-blue-500 to-slate-300 bg-clip-text text-transparent">Library</h2>
            <div className="w-full flex flex-col justify-center items-center gap-7">
            {books.length ? (
                books.map((book, index) => (
                    <div key={index} className="border-l-2 justify-center items-center gap-8 border-l-blue-500 min-h-24 flex w-1/2 mx-auto text-lg">
                        <p className="mx-auto">Title: {book.title}</p>
                        <p className="mx-auto">Author: {book.author}</p>
                        <button onClick={() => detailBookPage(book._id)} className="ml-auto mr-4 rounded-md border-2 p-4 border-sky-500 hover:bg-blue-500 duration-150 active:animate-ping">Read</button>
                    </div>
                ))
            ) : 'Loading......'}
            </div>
        </section>
    )
}