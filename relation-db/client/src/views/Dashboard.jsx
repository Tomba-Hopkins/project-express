import { useEffect, useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
axios.defaults.withCredentials = true

function Dashboard(){
    const navigate = useNavigate()

    const [username, setUsername] = useState("")


    useEffect(() => {

        const getUsername = async () => {
            try {
                const result = await axios.get('http://localhost:5000/api/auth-check', {
                    withCredentials: true
                })
                setUsername(result.data.username)
                console.log(result.data)
            } catch (err) {
                navigate('/login')
                console.log(err)
            }
        }

        getUsername()
        
        
    },[])


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
    
    
    return(
        <>
            <h1>Hello {username ? username : 'Stranger'}</h1>
            <section className="h-full w-1/4 p-10 flex flex-col self-end gap-4 border-l-2 border-l-blue-500">
                <button className=" w-24 h-24 rounded-full border-2 p-1 border-sky-500 hover:bg-blue-500 duration-150 active:animate-ping" onClick={loggoutHandler}>Logout</button>
                <button className=" w-24 h-24 rounded-full border-2 p-1 border-sky-500 hover:bg-blue-500 duration-150 active:animate-ping" onClick={bookPage}>Add Book</button>
            </section>
        </>
    )
}


export default Dashboard