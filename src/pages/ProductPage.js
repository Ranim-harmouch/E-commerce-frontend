import React, { useState, useEffect } from "react";
import { getAllProducts } from "../services/apiService";
import ProductCard from "../components/ProductCard";

import Header from "../components/header"; // Import the Header component
import Footer from "../components/footer"; // Import the Footer component

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products when the component is mounted
    const fetchProducts = async () => {
      try {
        const productsData = await getAllProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
     <div>
      <Header /> {/* Include Header */}
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
    <Footer /> {/* Include Footer */}
        </div>
  );
};

export default ProductPage;
