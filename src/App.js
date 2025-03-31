import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import LoginPage from './pages/loginPage';
import About from "./pages/about";
import SignupPage from './pages/signupPage';
import Dashboard from './pages/Dashboard';
import Unauthorized from './pages/Unauthorized';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home is now the default page at "/" */}
        <Route path="/" element={<Home />} />

        {/* Signup and Login Routes */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </Router>
  );
};

export default App;
