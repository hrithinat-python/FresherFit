import React from "react";
import { useNavigate } from "react-router-dom";
import "./FrontPage.css"; // optional, for styling
import myimage from "./images/award.png";
import aboutimage from "./images/a-2.jpg";

const FrontPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/resume"); // navigate to the ResumeForm page
  };

  return (
    <div className="front-container">

      <nav className="nav">
        <div className="logo">
        <img src={myimage} alt="example"></img>
        <h3>FRESHERFIT</h3>
        </div>
        <input type="checkbox" id="menu-toggle" />
        <label for="menu-toggle" class="hamburger">&#9776;</label>
        <ul className="navlinks">
          <li><a href="">About</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Help</a></li>
        </ul>
      </nav>
      <div className="home-section">
        <h1>Welcome to Resume Builder</h1>
        <p>Create a professional resume in minutes!</p>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
      <div className="about-container">
        <h1>About FresherFit</h1>

        <p>
          FresherFit is a platform designed to help fresh graduates and job seekers
          create professional and ATS-friendly resumes quickly and easily.
          Our mission is to support freshers who are starting their career journey
          by providing simple tools to build structured and attractive resumes.
        </p>

        <p>
          We believe every fresher deserves the opportunity to present their
          skills, education, and projects in a professional way. FresherFit
          makes resume building easy, fast, and accessible so that users can
          confidently apply for job opportunities.
        </p>

        <p>
          Our goal is to bridge the gap between talented freshers and recruiters
          by helping candidates showcase their potential effectively.
        </p>
      </div>
      <div className="services-container">

        <h1>Our Services</h1>

        <div className="service-cards">

          <div className="service-card">
            <h2>ATS Friendly Resume Builder</h2>
            <p>Create professional resumes that pass Applicant Tracking Systems used by companies.</p>
          </div>

          <div className="service-card">
            <h2>Easy Resume Download</h2>
            <p>Generate and download your resume instantly in PDF format.</p>
          </div>

          <div className="service-card">
            <h2>Simple Resume Templates</h2>
            <p>Choose clean and professional templates suitable for freshers.</p>
          </div>

          <div className="service-card">
            <h2>Quick Form Based Builder</h2>
            <p>Just fill a simple form and your resume will be generated automatically.</p>
          </div>

        </div>
      </div>
    </div>

  );
};

export default FrontPage;
