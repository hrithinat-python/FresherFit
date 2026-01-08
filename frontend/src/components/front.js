import React from "react";
import { useNavigate } from "react-router-dom";
import "./FrontPage.css"; // optional, for styling

const FrontPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/resume"); // navigate to the ResumeForm page
  };

  return (
    <div className="front-container">
      <h1>Welcome to Resume Builder</h1>
      <p>Create a professional resume in minutes!</p>
      <button onClick={handleGetStarted}>Get Started</button>
    </div>
  );
};

export default FrontPage;
