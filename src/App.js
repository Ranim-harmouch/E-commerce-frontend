<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './components/login';
// import Dashboard from './pages/dashboard';


const App = () => {
  return (
    <Router>
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Header from "./components/Header";


function App() {
  return (
    <Router>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
>>>>>>> dc70a1facd3c227f672a3ffbafcb69a6b97cb732
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <ProtectedRoute path="/dashboard" element={<DashboardPage />} /> */}

        {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
      </Routes>
<<<<<<< HEAD
=======
      {/* <Footer /> */}
      </div>
      </div>
>>>>>>> dc70a1facd3c227f672a3ffbafcb69a6b97cb732
    </Router>
  );
};

export default App;

