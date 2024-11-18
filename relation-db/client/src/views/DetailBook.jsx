import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"

export default function DetailBook(){

    const {book_id} = useParams()
    const [book, setBook] = useState({})

    useEffect(() => {

        const getDetailBook = async() => {
            try {
                const result = await axios.get(`http://localhost:5000/api/books/detail/${book_id}`)
                setBook(result.data.book)
            } catch (err) {
                console.log(err)
            }
        }

        getDetailBook()
        
    }, [book_id])
    
    
    return (
        <>
            <section className="w-full items-center justify-center p-8 flex flex-col gap-6">
                <h2 className="text-2xl font-semibold my-4 bg-gradient-to-r from-blue-500 to-slate-300 bg-clip-text text-transparent">{book.title}</h2>
                <p className="border-l-2 border-l-sky-500 p-8">{book.content}</p>
                <em className="self-end">Author by: {book.author}</em>
            </section>
            
        </>
        
    )
}