import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import LoginPage from './pages/loginPage';  // Updated import
// import RedButton from "./components/Redbutton";
// import WhiteButton from "./components/WhiteButton";
import About from "./pages/about";
import SignupPage from './pages/signupPage';  // Updated import
// import CartPage from './pages/cartPage';  // Updated import
import Dashboard from './pages/Dashboard'; // Protected page
import Unauthorized from './pages/Unauthorized'; // Unauthorized access page
import ProtectedRoute from './components/ProtectedRoute'; // ProtectedRoute component


const App = () => {
  return (
    <Router>
      <div>
          <Routes>
             <Route path="/" element={<Home />} /> 
            <Route path="/signup" element={<SignupPage />} />  {/* Updated route */}
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/login" element={<LoginPage />} />  {/* Updated route */}
            {/* <Route path="/cart" element={<CartPage />} /> */}
            {/* <Route path="/dashboard" element={<DashboardPage />} /> */}

           {/* Protected About Page */}
           <Route path="/about" element={ <ProtectedRoute>   <About /> </ProtectedRoute> } />
           {/* Protected Route for Dashboard */}
           <Route path="/dashboard" element={   <ProtectedRoute>     <Dashboard />   </ProtectedRoute>    } />
          {/* Route for Unauthorized page */}
           <Route path="/unauthorized" element={<Unauthorized />} />

          </Routes>
       </div>
    </Router> 
  );
};

export default App;

