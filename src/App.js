import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import RedButton from "./components/Redbutton";
import WhiteButton from "./components/WhiteButton";


function App() {
  return (
    <Router>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="" />
          </Routes>
          <Footer />
          <div className="flex gap-4 p-6">
          <RedButton label="View all Products" to="/product" />
          <WhiteButton label="Return To Shop" to="/shop" />
          </div>
        </div>
      </div>
    </Router>

  );
}

export default App;
