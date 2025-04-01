import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, index }) => {
  // Calculate old price using discount
  const oldPrice = product.discount
    ? (product.price / (1 - product.discount / 100)).toFixed(2)
    : null;

  return (
    <div className="bg-white p-4 rounded-lg transition relative">
      {/* Discount Badge */}
      {product.discount > 0 && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          -{product.discount}%
        </div>
      )}

      {/* Product Image (Clickable) */}
      {product.images && product.images.length > 0 && (
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-40 object-contain rounded-md cursor-pointer"
          />
        </Link>
      )}

      {/* Add to Cart Button (Only for second product) */}
      {index === 1 && (
        <button className="absolute bottom-28 w-60 bg-black text-white py-2 rounded hover:bg-gray-800 transition">
          Add To Cart
        </button>
      )}

      {/* Product Details */}
      <div className="mt-4 text-center">
        {/* Product Name */}
        <h3 className="text-lg font-semibold h-12 flex items-center justify-center">
          {product.name}
        </h3>

        {/* Pricing */}
        <div className="mt-2">
          <span className="text-lg font-bold text-red-500">${product.price}</span>
          {oldPrice && (
            <span className="text-gray-500 text-sm line-through ml-2">
              ${oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;