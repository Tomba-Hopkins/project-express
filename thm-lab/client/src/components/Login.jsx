import { useState } from "react"
import nasgor from "../assets/nasgor.webp"
import { motion } from "motion/react"

const ip = window.location.origin

// eslint-disable-next-line react/prop-types
export default function Login({ setValid }) {

    const [uname, setUname] = useState("")
    const [passwd, setPasswd] = useState("")


    const credsHandler = async (e) => {
        console.log(ip)
        e.preventDefault()

        console.log(uname, passwd)

        try {
            const res = await fetch(`http://${ip}:8080/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: uname,
                    password: passwd
                })
            });

            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);


            console.log("Correct", res);
            setValid(true);


        } catch (error) {
            console.log(error)
        }

        setUname("")
        setPasswd("")
    }


    return (
        <main className="w-full h-screen text-slate-100 flex gap-8 justify-center items-center bg-slate-800">
            <img className="w-48 h-48 rounded-xl border-2 border-orange-300" src={nasgor} alt="nasgor" />
            <form onSubmit={credsHandler} className="w-80 h-72 mx-10 flex flex-col items-center justify-center rounded-xl bg-orange-900 gap-4 font-bold" >

                <div>
                    <label className="flex" htmlFor="username">Username</label>
                    <input value={uname} onChange={(s) => setUname(s.target.value)} id="username" className="bg-white text-slate-900 p-2" type="text" />
                </div>
                <div>
                    <label className="flex" htmlFor="password">Password</label>
                    <input value={passwd} onChange={(s) => setPasswd(s.target.value)} id="password" className="bg-white text-slate-900 p-2" type="text" />
                </div>

                <motion.button initial={{ backgroundColor: '#1d293d' }} animate={{ backgroundColor: ['#7e2a0c', '#1d293d', '#ffffff', '#7e2a0c'] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeIn' }} className="p-2 px-5 rounded-sm">Login</motion.button>
            </form>
        </main>
    )
}