import { useState } from "react"; 
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css"; // Import the CSS file

import Header from "../components/header"; // Import the Header component
import Footer from "../components/footer"; // Import the Footer component


const SignupPage = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const response = await registerUser(formData);
        if (response.data) {
            alert("User registered successfully!");
            navigate("/"); // Redirect to homepage
        } else {
            setError(response.message || "Registration failed");
        }
    };

    return (
        <div>
            <Header /> {/* Include Header */}
        <div className="signup-container">
            <h3>Create an Account</h3>
            <p>Enter your details below </p>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder=" Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Create Account</button>
            </form>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
        <Footer /> {/* Include Footer */}
        </div>
    );
};

export default SignupPage;