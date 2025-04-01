import React from "react";
import "../styles/footer.css"; // Import the external CSS

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Contact Details */}
                <div>
                    <h3 className="footer-heading">Contact Details</h3>
                    <p className="footer-text">exclusive@gmail.com</p>
                    <p className="footer-text">+88015-88888-9999</p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="footer-heading">Links</h3>
                    <ul className="footer-links">

                        <li><a href="/">Home</a></li>
                        <li><a href="/product/:id">Product</a></li>
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/about">About</a></li>

                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="footer-heading">Our Socials</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>

            {/* Copyright Text */}
            <div className="copyright">
                © Copyright Rimel 2022. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;