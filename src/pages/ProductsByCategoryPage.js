import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const ProductsByCategoryPage = () => {
  const { category } = useParams(); // Get category from URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/category/${category}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [category]);

  return (
    <div>
      <h2>Products in {category}</h2>
      <div>
        {products.length > 0 ? (
          products.map((product) => <ProductCard key={product._id} product={product} />)
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsByCategoryPage;