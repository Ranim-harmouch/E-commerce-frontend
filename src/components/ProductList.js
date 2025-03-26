import React, { useState, useEffect } from "react";
import { getAllProducts } from "../services/apiService";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        setProducts(products);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center text-lg font-semibold">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      {/* Product Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-2xl transition" >
            {/* Product Image */}
            {product.images && product.images.length > 0 && (
              <img
                src={product.images[0]} // Fixed: Get the first image from array
                alt={product.name}
                className="w-full h-48 object-contain rounded-md"
              />
            )}

            {/* Product Details */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
              <p className="text-lg font-bold text-blue-600 mt-2">{product.price} $</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;

