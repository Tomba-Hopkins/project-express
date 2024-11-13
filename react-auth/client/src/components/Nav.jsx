import { Link } from "react-router-dom"


function Nav(){

    return (
        <nav className="w-screen h-12 bg-sky-600 text-slate-200 p-2 flex gap-4 items-center justify-start">
            <Link to="/">Home</Link>
            <Link  to="/login" >Login</Link>
            <Link>Register</Link>
        </nav>
    )
}


export default Nav