


// import React from "react";

// const ProductInfo = ({ name, description, price, oldPrice }) => {
//   return (
//     <div className="w-1/2 pl-6 mt-20 ">
//       <h2 className="text-2xl  font-bold">{name}</h2>
//       <p className="text-gray-600 mt-2">
//         {description}
//       </p>
//       <div className="mt-4 text-red-500 text-xl font-bold mt-10 ">
//         ${price} <span className="text-gray-400 line-through text-sm">${oldPrice}</span>
//       </div>
//       {/* Quantity and Button */}
//       <div className="flex items-center mt-4 mt-10 ">
//         <button className="bg-gray-300 px-4 py-2">-</button>
//         <span className="mx-2">2</span>
//         <button className="bg-red-500 px-4 py-2">+</button>
//         <button className="bg-red-500 text-white px-6 py-2 ml-4">Buy Now</button>
//       </div>
//     </div>
//   );
// };

// export default ProductInfo;




import React, { useState } from "react";

const ProductInfo = ({ name, description, price, oldPrice }) => {
  const [quantity, setQuantity] = useState(2); // Default quantity set to 2

  const increaseQuantity = () => setQuantity(quantity + 1); // Increase quantity
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1); // Decrease quantity, ensuring it doesn't go below 1

  return (
    <div className="w-1/2 pl-6 mt-20">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-4 text-red-500 text-xl font-bold mt-10">
        ${price} <span className="text-gray-400 line-through text-sm">${oldPrice}</span>
      </div>
      {/* Quantity and Button */}
      <div className="flex items-center mt-4 mt-10">
        <button
          className="bg-gray-300 px-4 py-2"
          onClick={decreaseQuantity}
        >
          -
        </button>
        <span className="mx-2">{quantity}</span>
        <button
          className="bg-red-500 px-4 py-2"
          onClick={increaseQuantity}
        >
          +
        </button>
        <button className="bg-red-500 text-white px-6 py-2 ml-4">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductInfo;
