import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/WhiteButton.css"; // Import external CSS

const WhiteButton = ({ label, to }) => {
  const navigate = useNavigate();

  return (
    <button className="white-button" onClick={() => navigate(to)}>
      {label}
    </button>
  );
};

export default WhiteButton;