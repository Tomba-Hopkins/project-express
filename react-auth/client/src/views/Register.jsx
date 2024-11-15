/* eslint-disable react/prop-types */
import { useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Register({ setMessage }){
    const navigate = useNavigate()

    const [data, setData] = useState(
        {
            username: "",
            password: ""
        }
    )

    
    const [showPasswd, setShowPasswd] = useState(false)


    const setUsername = (e) => {
        setData({
            ...data,
            username: e.target.value
        })
    }
    const setPassword = (e) => {
        setData({
            ...data,
            password: e.target.value
        })
    }


    const submitForm = async (e) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:5000/api/register', data)
        setMessage("New user added successfull")
        // console.log(data)
        
        console.log(res.data)
        
        if(res.data.redirect){
            navigate(res.data.redirect)
        }
    }


    const toggleShowPasswd = () => {
        setShowPasswd(!showPasswd)
    }
    
    
    
    return (
        <>
            <h1 className="text-3xl">Register Page</h1>
    

            <form onSubmit={submitForm} className="w-1/2 h-72 flex flex-col items-center justify-center gap-4 border-2 border-blue-500 p-8 m-8 rounded-sm">
      
                    <label htmlFor="username">Username</label>
                    <input required onChange={setUsername} className="focus:outline-sky-500 p-1 text-center text-slate-900" type="text" id="username" />
      
                    <label htmlFor="password">Password</label>
                    <input required onChange={setPassword} className="focus:outline-sky-500 p-1 text-center text-slate-900" type={showPasswd ? "text" : "password"} id="password" />
                    <div>
                        <input className="mr-4" onChange={toggleShowPasswd} type="checkbox" id="cek" />
                        <label htmlFor="cek">show password</label>
                    </div>
                <button type="submit" className="w-1/4 rounded-sm border-2 p-1 border-sky-500 hover:bg-blue-500 duration-150 active:animate-ping">Register</button>
            </form>
        </>
    )
}


export default Register