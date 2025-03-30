import React, { useState } from "react";
import "../styles/cartPage.css"; // Make sure to have corresponding styles

const CartPage = () => {
    // Sample cart items
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "LCD Monitor", price: 650, quantity: 1, image: "https://i.ibb.co/W4d1FVGj/462dd6410210.jpg" },
        { id: 2, name: "HI Gamepad", price: 550, quantity: 2, image: "https://i.ibb.co/G3P0z0Xj/3088537bca3f.jpg" },
    ]);

    // Function to handle quantity change
    const handleQuantityChange = (id, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: parseInt(newQuantity) } : item
            )
        );
    };

    // Function to calculate total price
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <nav className="breadcrumb">Home / Cart</nav>

            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <td className="product-info">
                                <button className="remove-btn">✖</button>
                                <img src={item.image} alt={item.name} className="product-image" />
                                {item.name}
                            </td>
                            <td>${item.price}</td>
                            <td>
                                <select
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                >
                                    {[...Array(10).keys()].map((num) => (
                                        <option key={num + 1} value={num + 1}>
                                            {num + 1}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td>${item.price * item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="cart-actions">
                <button className="return-shop">Return To Shop</button>
                <button className="update-cart">Update Cart</button>
            </div>

            <div className="cart-total">
                <h3>Cart Total</h3>
                <p>Subtotal: <span>${subtotal}</span></p>
                <p>Shipping: <span>Free</span></p>
                <p>Total: <span>${subtotal}</span></p>
                <button className="checkout-btn">Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default CartPage;