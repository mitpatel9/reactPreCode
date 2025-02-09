import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import CustomerRegistration from "./components/CustomerReg";
import AdminRegistration from "./components/AdminReg";
import AdminLogin from "./components/Admin";


function App() {
  const NavigateButtons = () => {
    const navigate = useNavigate();

    return (
      <div>
        <h2>Techerudite Practical for MERN STACK Developer</h2>
        <button onClick={() => navigate("/customer/register")}>
          Customer Register
        </button>
        <button onClick={() => navigate("/admin/register")}>
          Admin Register
        </button>
        <button onClick={() => navigate("/admin/login")}>Admin Login</button>
      </div>
    );
  };
  return (
    <Router>
      <NavigateButtons />
      <Routes>
        <Route path="/customer/register" element={<CustomerRegistration />} />
        <Route path="/admin/register" element={<AdminRegistration />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
