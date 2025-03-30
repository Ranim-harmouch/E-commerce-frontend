import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";
// import Contact from "./pages/contact";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      
      <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Dashboard />} />
      {/* <Route path="/contact "   element={<Contact />}/> */}
      </Routes>

    </Router>
    
  );
}

export default App;
