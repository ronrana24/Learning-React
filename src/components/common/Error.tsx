import React from "react";
import "./style.css";

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-icon">&#9888;</div>
      <div className="error-content">
        <h2 className="error-title">Oops! Something went wrong.</h2>
        <p className="error-message">{message}</p>
      </div>
    </div>
  );
};

export default Error;
