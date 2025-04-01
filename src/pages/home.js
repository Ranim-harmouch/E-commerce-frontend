
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import RedButton from "../components/Redbutton";
import FlashSales from "../components/FlashSales";
import BestSellingProducts from "../components/BestSellingProducts";
import OurProducts from "../components/OurProducts";
import "../styles/home.css";
import image from "../assets/Side Image.png";
import BackToTop from "../components/BackToTop";

const Home = () => {
    const [cart, setCart] = useState([]); // Cart state
    const navigate = useNavigate();

    // Function to handle adding a product to the cart
    const handleAddToCart = (product) => {
        setCart([...cart, product]); // Add product to cart
        navigate("/cart", { state: { cartItems: [...cart, product] } }); // Navigate to cart page with items
    };

    return (
        <div>
            <div className="black-rectangle"></div>
            <Header />
            <div className="div-container">
                <div className="sidebar-area">
                    <Sidebar />
                    <div className="image">
                        <img src={image} alt="Home-image" />
                    </div>
                </div>

                {/* Flash Sales Section */}
                <div>
                    <div className="flash-sale">
                        <div className="rectangle"></div>
                        <div>Today's</div>
                    </div>
                    <div className="flash-sales">
                        <section className="w-full mt-8 px-4">
                            <FlashSales onAddToCart={handleAddToCart} />
                        </section>
                        <RedButton label="View all Products" to="/product" />
                    </div>
                </div>
                <hr className="w-full border-t border-gray-400 my-6" />

                {/* Best Selling Products Section */}
                <div>
                    <div className="flash-sale">
                        <div className="rectangle"></div>
                        <div>This Month</div>
                    </div>
                    <div className="flash-sales">
                        <section className="w-full mt-8 px-4">
                            <BestSellingProducts onAddToCart={handleAddToCart} />
                        </section>
                    </div>
                </div>
                <div className="h-24"></div>

                {/* Our Products Section */}
                <div>
                    <div className="flash-sale">
                        <div className="rectangle"></div>
                        <div>Our Products</div>
                    </div>
                    <div className="flash-sales">
                        <section className="w-full mt-8 px-4">
                            <OurProducts onAddToCart={handleAddToCart} />
                        </section>
                        <RedButton label="View all Products" to="/product" />
                    </div>
                </div>
                <div className="h-24"></div>
                <BackToTop />
            </div>
            <Footer />
        </div>
    );
};

export default Home;


