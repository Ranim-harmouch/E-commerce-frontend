// /services/authService.js

const LOGIN_URL = 'http://localhost:5000/users/login';  // Replace with your API endpoint
const REGISTER_URL = 'http://localhost:5000/users/register';

// Function to handle login
export const login = async (email, password) => {
  try {
    const response = await fetch(LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Invalid credentials or server error');
    }

    const data = await response.json();

    // Save token and user role
    localStorage.setItem('authToken', data.token);
    localStorage.setItem('userRole', data.role); // Assuming role is returned from server
    
    return data;  // Assuming the response contains user data or a token
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Function to handle user registration (Signup)
export const registerUser = async (userData) => {
  try {
    const response = await fetch(REGISTER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Failed to register user');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};