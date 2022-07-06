import { Route, Routes } from "react-router-dom";
import Login from "../components/common/Login";
import Signup from "../components/common/Signup";


const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

export default Navigation;
