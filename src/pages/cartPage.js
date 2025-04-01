import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

import Header from '../components/header';
import Footer from '../components/footer';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  // Calculate subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Function to handle updating the cart (this can be customized based on your needs)
  const updateCart = () => {
    // Example of how you might handle updating the cart
    console.log("Cart updated!");
    // Additional logic here if needed (e.g., saving to local storage, recalculating totals, etc.)
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-6">
        <h2 className="text-xl font-semibold mb-4">Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="border-b">
                  <th className="p-3 text-left">Product</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3 flex items-center">
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 text-lg mr-2"
                      >
                        ❌
                      </button>
                      <img src={item.images[0]} alt={item.name} className="w-16 h-16 mr-2" />
                      {item.name}
                    </td>
                    <td className="p-3 text-center">${item.price}</td>
                    <td className="p-3 text-center">
                      <select
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="border p-1"
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </td>
                    <td className="p-3 text-center">${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between mt-4">
              <Link to="/" className="border p-2">Return To Shop</Link>
              {/* Update Cart Button */}
              <button 
                onClick={updateCart} // Call the updateCart function when clicked
                className="border p-2"
              >
                Update Cart
              </button>
            </div>

            <div className="border p-4 mt-6 w-1/3">
              <h3 className="text-lg font-semibold mb-2">Cart Total</h3>
              <p>Subtotal: <span className="float-right">${subtotal.toFixed(2)}</span></p>
              <p>Shipping: <span className="float-right">Free</span></p>
              <hr className="my-2" />
              <p className="font-bold">Total: <span className="float-right">${subtotal.toFixed(2)}</span></p>
              <button className="w-full mt-4 bg-red-500 text-white py-2">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;

