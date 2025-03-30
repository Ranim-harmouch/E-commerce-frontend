import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import LoginPage from './pages/loginPage';  // Updated import
// import Dashboard from './pages/dashboard';
// import Header from "./components/header";
// import Sidebar from "./components/sidebar";
// import Footer from "./components/footer";
// import RedButton from "./components/Redbutton";
// import WhiteButton from "./components/WhiteButton";
import About from "./pages/about";
import SignupPage from './pages/signupPage';  // Updated import
import CartPage from './pages/cartPage';  // Updated import


const App = () => {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignupPage />} />  {/* Updated route */}
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginPage />} />  {/* Updated route */}
            <Route path="/cart" element={<CartPage />} />
                {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
          </Routes>
         </div>
       </div>
    </Router> 
  );
};

export default App;

