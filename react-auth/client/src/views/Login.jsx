import { useState } from "react"
import AxiosInstance from "../utils/AxiosInstance"

/* eslint-disable react/prop-types */
function Login({msg}){


    const [data, setData] = useState({
        username: "",
        password: ""
    })


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

        
        try {
            const res = await AxiosInstance.post('/login', data)
            console.log(res.data)
            
        } catch (error) {
            console.log(error)
            console.log('Redirect aja sana')
        }
        
    }
    
    
    
    
    return(
        <>
            <h1 className="text-3xl">Login Page</h1>
            {msg ? (
                <p className="text-green-400">{msg}</p>
            ) : ''}
            <form onSubmit={submitForm} className="w-1/2 h-72 flex flex-col items-center justify-center gap-4 border-2 border-blue-500 p-8 m-8 rounded-sm">
      
                    <label htmlFor="username">Username</label>
                    <input onChange={setUsername} className="focus:outline-sky-500 p-1 text-center text-slate-900" type="text" id="username" />
      
                    <label htmlFor="password">Password</label>
                    <input onChange={setPassword} className="focus:outline-sky-500 p-1 text-center text-slate-900" type="text" id="password" />
                    <div>
                        <input className="mr-4" type="checkbox" id="cek" />
                        <label htmlFor="cek">show password</label>
                    </div>
                <button className="w-1/4 rounded-sm border-2 p-1 border-sky-500 hover:bg-blue-500 duration-150 active:animate-ping">Login</button>
            </form>
        </>
    )
}


export default Login