import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "./ResumeForm.css"; // We'll use this CSS file for styling
import { useNavigate } from "react-router-dom";

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    education: "",
    skills: "",
    projects: "",
    certifications: "",
    training: "",
  });

  const resumeRef = useRef();
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  //template state
  const [selectedTemplate, setSelectedTemplate] = useState(1);

  const downloadPDF = async () => {
    console.log("Clicked");

    // Validation
    for (let key in formData) {
      if (formData[key].trim() === "") {
        alert("Please fill all the fields before downloading.");
        return;
      }
    }

    try {
      // ✅ SEND DATA TO DJANGO
      const response = await fetch("http://127.0.0.1:8000/api/resume/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save data");
      }

      console.log("Data saved to DB ✅");

    } catch (error) {
      console.error("Error:", error);
      alert("Error saving data");
      return;
    }

    // ✅ THEN DOWNLOAD PDF
    const input = resumeRef.current;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="container">
      <button onClick={goHome} className="back">
        ←
      </button>
      <h1 className="title">Resume Builder</h1>
      <div className="template-selection">
        <h2>Select Template</h2>

        <label>
          <input
            type="radio"
            name="template"
            value="1"
            checked={selectedTemplate === 1}
            onChange={() => setSelectedTemplate(1)}
          />
          Classic Template
        </label>

        <label>
          <input
            type="radio"
            name="template"
            value="2"
            checked={selectedTemplate === 2}
            onChange={() => setSelectedTemplate(2)}
          />
          Modern Template
        </label>
      </div>

      <div className="content">
        {/* Form Section */}
        <div className="form-section">
          <h2>Enter Your Details</h2>
          <form>
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              value={formData.full_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn"
              value={formData.linkedin}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="github"
              placeholder="GitHub"
              value={formData.github}
              onChange={handleChange}
              required
            />
            <textarea
              name="education"
              placeholder="Education"
              value={formData.education}
              onChange={handleChange}
              required
            />
            <textarea
              name="skills"
              placeholder="Skills"
              value={formData.skills}
              onChange={handleChange}
              required
            />
            <textarea
              name="projects"
              placeholder="Projects"
              value={formData.projects}
              onChange={handleChange}
              required
            />
            <textarea
              name="certifications"
              placeholder="Certifications"
              value={formData.certifications}
              onChange={handleChange}
              required
            />
            <textarea
              name="training"
              placeholder="Training"
              value={formData.training}
              onChange={handleChange}
              required
            />
          </form>
        </div>

        {/* Resume Preview Section */}
        <div className="preview-section" ref={resumeRef}>
          <div className="resume-header">
            <h1>{formData.full_name || "Full Name"}</h1>
            <p>
              {formData.email || "Email"} | {formData.phone || "Phone"} |{" "}
              {formData.location || "Location"}
            </p>
            <p>
              LinkedIn: {formData.linkedin || "-"} | GitHub: {formData.github || "-"}
            </p>
          </div>

          <div className="resume-section">
            <h2>Education</h2>
            <p>{formData.education || "Your education details"}</p>
          </div>

          <div className="resume-section">
            <h2>Skills</h2>
            <p>{formData.skills || "Your skills"}</p>
          </div>

          <div className="resume-section">
            <h2>Projects</h2>
            <p>{formData.projects || "Your projects"}</p>
          </div>

          <div className="resume-section">
            <h2>Certifications</h2>
            <p>{formData.certifications || "Your certifications"}</p>
          </div>

          <div className="resume-section">
            <h2>Training</h2>
            <p>{formData.training || "Training programs"}</p>
          </div>
        </div>
      </div>

      <button type="button" className="download-btn" onClick={downloadPDF}>
        Download PDF
      </button>
    </div>
  );
};

export default ResumeForm;
