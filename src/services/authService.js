// /services/authService.js

const LOGIN_URL = 'http://localhost:5000/users/login';  // Replace with your API endpoint

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
    return data;  // Assuming the response contains user data or a token
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
