import { useEffect, useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

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
    
    
    return(
        <>
            <h1>Hello {username ? username : 'Stranger'}</h1>
            <button className="w-1/4 rounded-sm border-2 p-1 border-sky-500 hover:bg-blue-500 duration-150 active:animate-ping" onClick={loggoutHandler}>Loggout</button>
        </>
    )
}


export default Dashboard