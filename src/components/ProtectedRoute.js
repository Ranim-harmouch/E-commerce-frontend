// components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

// Protect route based on authentication (and role, if needed)
const ProtectedRoute = ({ children, requiredRole }) => {
  const authToken = localStorage.getItem('authToken');
  const userRole = localStorage.getItem('userRole'); // Assuming role is stored

  if (!authToken) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" />;
  }

  if (requiredRole && userRole !== requiredRole) {
    // Redirect to Unauthorized page if user doesn't have the required role
    return <Navigate to="/unauthorized" />;
  }

  // If authenticated and authorized (if needed), render the children
  return children;
};

export default ProtectedRoute;
