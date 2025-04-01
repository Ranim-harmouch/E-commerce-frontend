import React from 'react';
import { CartProvider } from "./context/CartContext";  // Import the CartProvider
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import LoginPage from './pages/loginPage';
import About from "./pages/about";
import SignupPage from './pages/signupPage';
import Dashboard from './pages/Dashboard';
import Unauthorized from './pages/Unauthorized';
import ProtectedRoute from './components/ProtectedRoute';
<<<<<<< HEAD
import SingleProductPage from "./pages/SingleProductPage";
import ProductsByCategoryPage from "./pages/ProductsByCategoryPage";
=======
import CartPage from "./pages/CartPage";  // Your cart page
>>>>>>> 4c37b23efd5db490d0449f00021de0bb4291e6bf

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

        {/* Single Product Page and Products By Category Page */}
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/products/category/:category" element={<ProductsByCategoryPage />} />

        {/* Protected Routes */}
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/cart" element={<CartPage />} />
        
      </Routes>
    </Router>
   </CartProvider>
  );
};

export default App;
