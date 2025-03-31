import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home';
import LoginPage from './pages/loginPage';
import About from "./pages/about";
import SignupPage from './pages/signupPage';
import Dashboard from './pages/Dashboard';
import Unauthorized from './pages/Unauthorized';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if authToken is stored in localStorage
    const authToken = localStorage.getItem('authToken');
    setIsAuthenticated(!!authToken); // Convert token to boolean (true if exists)
  }, []);

  return (
    <Router>
      <Routes>
        {/* Redirect user to Signup if not authenticated */}
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <SignupPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Protect Home, About, and Dashboard */}
        <Route path="/home" element={ <ProtectedRoute> <Home /> </ProtectedRoute> } />
        <Route path="/about" element={ <ProtectedRoute> <About /> </ProtectedRoute> } />
        <Route path="/dashboard" element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute> } />

        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </Router>
  );
};

export default App;

