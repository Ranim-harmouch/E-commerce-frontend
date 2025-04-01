import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("Fetching product with ID:", id); // Debugging
        const response = await fetch(`http://localhost:5000/api/products/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product.");
        const data = await response.json();
        console.log("Fetched product data:", data); // Check if product data is received
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <div>
      <h2>{product?.name || "No Name Available"}</h2>
      {product?.images && product.images.length > 0 ? (
        <img src={product.images[0]} alt={product.name} />
      ) : (
        <p>No Image Available</p>
      )}
      <p>Price: ${product?.price ?? "N/A"}</p>
      <p>{product?.description || "No description available."}</p>
    </div>
  );
};

export default SingleProductPage;