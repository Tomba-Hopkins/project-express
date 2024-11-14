import { Link } from "react-router-dom"


function Nav(){

    return (
        <nav className="w-full top-0 fixed h-20 border-b-2 font-semibold border-b-sky-500 bg-slate-900/30 backdrop-blur-sm text-slate-200 p-10 flex gap-4 items-center justify-start ">
            <Link className="hover:text-sky-500" to="/">Home</Link>
            <Link className="hover:text-sky-500"  to="/login" >Login</Link>
            <Link className="hover:text-sky-500">Register</Link>
        </nav>
    )
}


export default Nav