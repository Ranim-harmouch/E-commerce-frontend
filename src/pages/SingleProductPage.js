
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImages from "../components/ProductImages";
import ProductInfo from "../components/ProductInfo";
import Reviews from "../components/Reviews";
import Header from "../components/header";
import Footer from "../components/footer";

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
        
        if (data && data.data) { // Check if data exists and contains 'data' field
          setProduct(data.data); // Set the product data
        } else {
          setError("Product not found.");
        }
      } catch (error) {
        setError(error.message); // Set the error message
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchProduct();
  }, [id]); // Only refetch if 'id' changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <div>
      <div className="black-rectangle"></div>
      <Header />
     <div className="flex container mx-auto p-6">
      {/* Product Images */}
      {product?.images && product.images.length > 0 && (
        <ProductImages images={product.images} />
      )}

      {/* Product Info */}
      <ProductInfo
        name={product.name}
        description={product.description}
        price={product.price}
        oldPrice={product.oldPrice}
      />
     </div>
      {/* Reviews Section */}
      <Reviews />
     
      <Footer />
    </div>
  );
};

export default SingleProductPage;
