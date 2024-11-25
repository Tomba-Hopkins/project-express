import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navAct, setNavAct] = useState(false);

  return (
    <>
      <nav className="w-full flex gap-8 p-6 font-bold bg-slate-300/30 text-slate-300 backdrop-blur-md fixed top-0 border-b-2 border-b-indigo-500 justify-between items-center">
        <p>Learn App</p>

        <div className="hidden md:flex w-1/3 gap-4">
          <Link className="hover:text-indigo-500" to="/">
            Home
          </Link>
          <Link className="hover:text-indigo-500" to="/quiz">
            Quiz
          </Link>
          <Link className="hover:text-indigo-500" to="/about">
            About
          </Link>
          <Link className="hover:text-indigo-500" to="/login">
            Login
          </Link>
        </div>

        <button
          onClick={() => setNavAct(!navAct)}
          className={`flex ${
            navAct ? "bg-indigo-500" : ""
          } md:hidden w-10 h-10 rounded-md border-4 border-indigo-500 p-4`}
        ></button>
      </nav>

      <nav
        className={`w-1/4 h-screen flex flex-col gap-4 font-bold text-slate-300 border-r-2 border-r-indigo-500 transform ${
          navAct ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 fixed items-center justify-center text-center`}
      >
        <Link
          className=" w-full bg-indigo-500 py-4 border-y-2 border-indigo-500"
          to="/"
        >
          Home
        </Link>
        <Link
          className=" w-full bg-indigo-500 py-4 border-y-2 border-indigo-500"
          to="/quiz"
        >
          Quiz
        </Link>
        <Link
          className=" w-full bg-indigo-500 py-4 border-y-2 border-indigo-500"
          to="/login"
        >
          Login
        </Link>
      </nav>
    </>
  );
}
