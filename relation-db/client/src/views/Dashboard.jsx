/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
axios.defaults.withCredentials = true

function Dashboard({msg}){
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [user_id, setUserId] = useState("")
    const [books, setBooks] = useState([])


    useEffect(() => {

        const getUsername = async () => {
            try {
                const result = await axios.get('http://localhost:5000/api/auth-check', {
                    withCredentials: true
                })
                setUsername(result.data.username)
                setUserId(result.data.user_id)
            } catch (err) {
                navigate('/login')
                console.log(err)
            }
        }

        getUsername()
        
        
    },[navigate])


    useEffect(() => {
        if(user_id){ // biar ga keduluan jir, id nya belom dapat ini dah minta req
            const getBooks = async() => {
                try {
                 const result = await axios.get(`http://localhost:5000/api/books/${user_id}`)
                //  console.log(result)
                setBooks(result.data.books)
                // console.log(result.data)
                } catch (err) {
                 console.log(err)
                }
             }
            getBooks()
        }

        
    },[user_id])


    const loggoutHandler = async () => {
        try {
            const result = await axios.get('http://localhost:5000/api/logout')
            if(result.data.redirect){
                navigate(result.data.redirect)
            }
        } catch (err) {
            console.log(err)
            navigate('/login')
        }
    }

    const bookPage = () => {
        navigate('/create-book')
    }
    const libraryPage = () => {
        navigate('/library')
    }

    const detailMyBook = (id) => {
        try {
            navigate(`/books/${id}`)
        } catch (err) {
            console.log(err)
        }
    }
    
    
    return(
        <>
            <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-slate-300 bg-clip-text text-transparent">Hello {username ? username : 'Stranger'}</h1>
            {msg ? (
                <p className="text-green-400">{msg}</p>
            ) : ''}
            <section className="h-full w-1/4 p-10 flex flex-col self-end gap-4 border-l-2 border-l-blue-500">
                <button className=" w-24 h-24 rounded-full border-2 p-1 border-sky-500 hover:bg-blue-500 duration-150 active:animate-ping" onClick={loggoutHandler}>Logout</button>
                <button className=" w-24 h-24 rounded-full border-2 p-1 border-sky-500 hover:bg-blue-500 duration-150 active:animate-ping" onClick={bookPage}>Add Book</button>
                <button className=" w-24 h-24 rounded-full border-2 p-1 border-sky-500 hover:bg-blue-500 duration-150 active:animate-ping" onClick={libraryPage}>Library</button>
            </section>
            <section className="w-full text-center p-8">
                <h2 className="text-2xl font-semibold my-4 bg-gradient-to-r from-blue-500 to-slate-300 bg-clip-text text-transparent">My Books</h2>
                <div className="w-full flex flex-col justify-center items-center gap-7">
                {books.length ? (
                    books.map((book, index) => (
                        <div key={index} className="border-l-2 justify-center items-center gap-8 border-l-blue-500 min-h-24 flex w-1/2 mx-auto text-lg">
                            <p className="mx-auto">Title: {book.title}</p>
                            <p className="mx-auto">Author: {book.author}</p>
                            <button onClick={() => detailMyBook(book._id)} className="ml-auto mr-4 rounded-md border-2 p-4 border-sky-500 hover:bg-blue-500 duration-150 active:animate-ping">Read</button>
                        </div>
                    ))
                ) : 'Loading......'}
                </div>
            </section>
        </>
    )
}


export default Dashboard