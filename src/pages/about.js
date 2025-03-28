import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/about.css";
import image from "../assets/Side Image.png";

const About = () => {
    return (
        <div>
            <Header />
            <div className="span-container"><pre><span>Home &nbsp;/</span>&nbsp; About</pre></div>
            <div className="about-page">
                <div className="about-header">
                    <h1>Our Story</h1><br />
                    <p>
                        Launched in 2025, <strong>powertech</strong> is South Asia’s premier online
                        shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored
                        marketing, data, and service solutions, powertech has 10,500 sellers and 300 brands and serves
                        3 million customers across the region.
                    </p><br />
                    <p>
                        powertech has more than 1 million products to offer, growing at a rapid pace.
                        We offer a diverse assortment in various categories.
                    </p>
                </div>
                <div className="about-image">
                    <img src={image} alt="About Us" />
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default About;