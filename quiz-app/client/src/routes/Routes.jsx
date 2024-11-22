import { Route, Routes } from "react-router-dom";
import Login from "../views/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
