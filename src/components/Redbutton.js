import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RedButton.css";

const RedButton = ({ label, to }) => {
  const navigate = useNavigate();

  return (
    <button className="red-button" onClick={() => navigate(to)}>
      {label}
    </button>
  );
};

export default RedButton;