import React from "react";

// ✅ Classic Template
function ClassicTemplate({ resume }) {
  return (
    <div style={{
      padding: "25px",
      fontFamily: "Arial, sans-serif",
      border: "1px solid #ccc",
      borderRadius: "10px",
      background: "#fff"
    }}>
      <h1>{resume.full_name || "Your Name"}</h1>
      <p>{resume.email} | {resume.phone}</p>
      <p>{resume.location}</p>

      {resume.linkedin && <p>LinkedIn: {resume.linkedin}</p>}
      {resume.github && <p>GitHub: {resume.github}</p>}

      <hr />

      <h3>Education</h3>
      {resume.education?.length > 0 ? (
        resume.education.map((edu, i) => (
          <p key={i}>
            {edu.degree} {edu.school && `at ${edu.school}`} {edu.year && `(${edu.year})`}
          </p>
        ))
      ) : (
        <p>No education added</p>
      )}

      <h3>Skills</h3>
      <p>{resume.skills?.length > 0 ? resume.skills.join(", ") : "No skills added"}</p>

      <h3>Projects</h3>
      {resume.projects?.length > 0 ? (
        resume.projects.map((p, i) => (
          <p key={i}>{p.name}: {p.description}</p>
        ))
      ) : (
        <p>No projects added</p>
      )}

      <h3>Certifications</h3>
      <p>{resume.certifications?.length > 0 ? resume.certifications.join(", ") : "None"}</p>

      <h3>Training</h3>
      <p>{resume.training?.length > 0 ? resume.training.join(", ") : "None"}</p>
    </div>
  );
}

// ✅ Modern Template
function ModernTemplate({ resume }) {
  return (
    <div style={{
      padding: "25px",
      fontFamily: "Verdana, sans-serif",
      borderRadius: "12px",
      background: "#f4f8ff",
      borderLeft: "6px solid #007BFF"
    }}>
      <h1 style={{ color: "#007BFF" }}>
        {resume.full_name || "Your Name"}
      </h1>

      <p>
        {resume.email} | {resume.phone} | {resume.location}
      </p>

      {resume.linkedin && <p>🔗 {resume.linkedin}</p>}
      {resume.github && <p>💻 {resume.github}</p>}

      <h3 style={{ borderBottom: "2px solid #007BFF" }}>Education</h3>
      {resume.education?.length > 0 ? (
        resume.education.map((edu, i) => (
          <p key={i}>• {edu.degree}</p>
        ))
      ) : (
        <p>No education added</p>
      )}

      <h3 style={{ borderBottom: "2px solid #007BFF" }}>Skills</h3>
      <p>{resume.skills?.length > 0 ? resume.skills.join(", ") : "No skills added"}</p>

      <h3 style={{ borderBottom: "2px solid #007BFF" }}>Projects</h3>
      {resume.projects?.length > 0 ? (
        resume.projects.map((p, i) => (
          <p key={i}>• {p.name}</p>
        ))
      ) : (
        <p>No projects added</p>
      )}

      <h3 style={{ borderBottom: "2px solid #007BFF" }}>Certifications</h3>
      <p>{resume.certifications?.length > 0 ? resume.certifications.join(", ") : "None"}</p>

      <h3 style={{ borderBottom: "2px solid #007bff" }}>Training</h3>
      <p>{resume.training?.length > 0 ? resume.training.join(", ") : "None"}</p>
    </div>
  );
}

// ✅ Main Component
export default function ResumePreview({ resume, template }) {
  if (!resume) {
    return <p>Please fill the form to preview your resume.</p>;
  }

  if (template === 1) return <ClassicTemplate resume={resume} />;
  if (template === 2) return <ModernTemplate resume={resume} />;

  return <p>Select a template</p>;
}