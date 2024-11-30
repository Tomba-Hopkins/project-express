import { Route, Routes } from "react-router-dom";
import Login from "../views/Login";
import Home from "../views/Home";
import Quiz from "../views/Quiz";
import Answer from "../views/Answer";

export default function AppRoutes() {
  return (
    <main className="w-full min-h-screen flex flex-col gap-8 items-center bg-slate-900 text-slate-200 pt-32">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/answer/:id" element={<Answer />} />
      </Routes>
    </main>
  );
}
