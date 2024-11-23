import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex gap-8 p-6 font-bold bg-slate-300/30 text-slate-300 backdrop-blur-md fixed top-0 border-b-2 border-b-indigo-500 ">
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
    </nav>
  );
}
