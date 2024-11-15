import { Route, Routes } from "react-router-dom";

import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";


function AppRoutes() {
    return (
        <main className="h-full mt-32 flex flex-col items-center p-10 min-h-screen bg-slate-900">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
        </main>
    )
}


export default AppRoutes