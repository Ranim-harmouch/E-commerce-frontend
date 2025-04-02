// pages/CheckoutPage.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Header from '../components/header';
import Footer from '../components/footer';
import RedButton from "../components/Redbutton";

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);

  // Calculate subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Billing Details Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name*</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded p-2" 
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Company Name</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded p-2" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Street Address*</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded p-2" 
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Apartment, floor, etc. (optional)</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded p-2" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Town/City*</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded p-2" 
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number*</label>
                <input 
                  type="tel" 
                  className="w-full border border-gray-300 rounded p-2" 
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email Address*</label>
                <input 
                  type="email" 
                  className="w-full border border-gray-300 rounded p-2" 
                  required 
                />
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="save-info" 
                  className="mr-2" 
                />
                <label htmlFor="save-info" className="text-sm">
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>
          
          {/* Order Summary Section */}
          <div className="md:w-1/2">
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Your Order</h2>
              
              {/* Cart Items */}
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between mb-3">
                  <span>{item.name}</span>
                  <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              
              <hr className="my-4 border-gray-200" />
              
              {/* Subtotal */}
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              {/* Shipping */}
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              
              <hr className="my-4 border-gray-200" />
              
              {/* Total */}
              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              {/* Payment Method */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <input 
                    type="radio" 
                    id="cash-on-delivery" 
                    name="payment" 
                    className="mr-2" 
                    defaultChecked 
                  />
                  <label htmlFor="cash-on-delivery">Cash on delivery</label>
                </div>
              </div>
              
              {/* Place Order Button */}
              <RedButton 
                label="Place Order" 
                onClick={() => alert("Order placed successfully!")}
                className="w-full py-3"
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CheckoutPage;