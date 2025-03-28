import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import RedButton from "./components/Redbutton";
import WhiteButton from "./components/WhiteButton";
import Home from "./pages/home";
import About from "./pages/about";


function App() {
  return (
    <Router>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
          {/* <div className="flex gap-4 p-6">
            <RedButton label="View all Products" to="/product" />
            <WhiteButton label="Return To Shop" to="/shop" />
          </div> */}
        </div>
      </div>
    </Router>

  );
}

export default App;
