import React from "react";
// import Header from "../components/header";
// import Sidebar from "../components/sidebar";
// import Footer from "../components/footer";
import RedButton from "../components/Redbutton";
// import ProductItem from "../components/ProductItem";
import "../styles/home.css";
import image from "../assets/Side Image.png";

const Home = () => {
    const flashSaleProducts = [
        {
          id: 1,
          title: "Red Gaming Controller",
          image: "/images/controller.png",
        },
        {
          id: 2,
          title: "RGB Mechanical Keyboard",
          image: "/images/keyboard.png",
        },
        {
          id: 3,
          title: "MSI Curved Monitor",
          image: "/images/monitor.png",
        },
        {
          id: 4,
          title: "Modern Chair",
          image: "/images/chair.png",
        },
      ];
      
    return (
        <div className="home-container">
            {/* <Header /> */}
            <div className="home-content">
                {/* <Sidebar /> */}
                <main className="home-main">
                    {/* Hero Section */}
                    <section className="hero">
                        <img src={image} alt="Shopping" className="hero-image" />
                    </section>

                    {/* Flash Sales */}
                    <section className="flash-sales">
                        <h2>Flash Sales</h2>
                        <div className="products-grid">
                            <Swiper products={flashSaleProducts} />
                        </div>
                        <RedButton label="View All Products" to="/about" />
                    </section>

                    {/* Best Selling Products */}
                    <section className="best-sellers">
                        <h2>Best Selling Products</h2>
                        <div className="products-grid">
                            {/* <ProductItem name="Coat" price="$260" />
              <ProductItem name="Bag" price="$960" />
              <ProductItem name="Cooler" price="$160" />
              <ProductItem name="Bookshelf" price="$380" /> */}
                        </div>
                    </section>

                    {/* Explore Our Products */}
                    <section className="explore-products">
                        <h2>Explore Our Products</h2>
                        <div className="products-grid">
                            {/* <ProductItem name="Camera" price="$360" />
              <ProductItem name="Laptop" price="$700" />
              <ProductItem name="Skincare Set" price="$500" />
              <ProductItem name="Car" price="$960" /> */}
                        </div>
                    </section>
                </main>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Home;