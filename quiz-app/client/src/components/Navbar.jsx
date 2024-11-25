import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navAct, setNavAct] = useState(false);

  return (
    <>
      <nav className="w-full flex gap-8 p-6 font-bold bg-slate-300/30 text-slate-300 backdrop-blur-md fixed top-0 border-b-2 border-b-indigo-500 justify-between">
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
          className={
            navAct
              ? "flex bg-indigo-500 md:hidden w-16 h-16 rounded-md border-4 border-indigo-500 p-4"
              : "flex md:hidden w-16 h-16 rounded-md border-4 border-indigo-500 p-4"
          }
        ></button>
      </nav>

      {navAct && (
        <nav className="w-full relative  p-6 font-bold bg-slate-300/30 text-slate-300 backdrop-blur-md border-b-2  top-0 border-b-indigo-500">
          <Link className="hover:text-indigo-500" to="/">
            Home
          </Link>
        </nav>
      )}
    </>
  );
}
