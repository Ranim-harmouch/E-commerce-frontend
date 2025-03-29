import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './components/login';
// import Dashboard from './pages/dashboard';
// import Header from "./components/header";
// import Sidebar from "./components/sidebar";
// import Footer from "./components/footer";
// import RedButton from "./components/Redbutton";
// import WhiteButton from "./components/WhiteButton";
import About from "./pages/about";


const App = () => {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

