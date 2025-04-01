
import React from 'react';
import { CartProvider } from "./context/CartContext";  // Import the CartProvider
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import LoginPage from './pages/loginPage';
import About from "./pages/about";
import SignupPage from './pages/signupPage';
import Dashboard from './pages/dashboard';
import Unauthorized from './pages/Unauthorized';
import Contact from "./pages/contact";
import ProtectedRoute from './components/ProtectedRoute';
import CartPage from "./pages/CartPage";  // Your cart page
import ChekoutPage from "./pages/CheckoutPage"; // Your checkout page
import ProductPage from "./pages/ProductPage"; 
const App = () => {

  return (
    <CartProvider>
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
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/checkout" element={<ChekoutPage />} />
        <Route path="/product" element={<ProductPage />} /> 
        
      </Routes>

    </Router>
   </CartProvider>
  );
};

export default App;
