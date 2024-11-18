/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function CreateBook({setMessage}){

    const navigate = useNavigate()

    const [user_id, setUserId] = useState("")
    const [username, setUsername] = useState("")
    const [data, setData] = useState({
        title: "",
        content: "",
        author: ""
    })

    useEffect(() => {
        const getUserId = async () => {
            try {
                const result = await axios.get('http://localhost:5000/api/auth-check', {
                    withCredentials: true
                })
                // console.log(result.data)
                setUserId(result.data.user_id)
                setUsername(result.data.username)
                
            } catch (err) {
                console.log(err)
                navigate('/login')
            }
        }

        getUserId()
        
    },[])


    const titleHandler = (e) => {
        setData({
            ...data,
            title: e.target.value
        })
    }
    const contentHandler = (e) => {
        setData({
            ...data,
            content: e.target.value
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        setData({
            ...data,
            author: username
        })

        try {
            const result = await axios.post(`http://localhost:5000/api/create-book/${user_id}`, data)
            setMessage(result.data.message)
            navigate(result.data.redirect)
            
        } catch (err) {
            console.log(err)
            navigate('/create-book')
        }
        
    }
    
    
    
    return (
        <>
            <h1 className="text-2xl p-4 border-b-2 border-b-sky-500">Add Book</h1>
            <p className="my-4 bg-gradient-to-r from-blue-500 to-slate-300 bg-clip-text text-transparent">Hello, {username ? username : '....'}. i cant wait ur masterpiece</p>

            <form onSubmit={submitHandler} className="w-1/2 flex flex-col items-center justify-center gap-4 border-2 border-blue-500 p-8 m-8 rounded-sm">
      
                    <label htmlFor="title">Title</label>
                    <input onChange={titleHandler} required className="focus:outline-sky-500 p-1 text-center text-slate-900" type="text" id="title" />
      
                    <textarea onChange={contentHandler} required className="my-8 text-slate-900 p-4" cols="30" rows="10"></textarea>
            
                <button className="w-1/4 rounded-sm border-2 p-1 border-sky-500 hover:bg-blue-500 duration-150 active:animate-ping">Add</button>
            </form>
        </>
    )
}