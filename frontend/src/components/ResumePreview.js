import React from "react";

// Classic Template
function ClassicTemplate({ resume }) {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", border: "1px solid #ddd" }}>
      <h1>{resume.full_name}</h1>
      <p>{resume.email} | {resume.phone}</p>
      <p>{resume.location}</p>
      {resume.linkedin && <p>LinkedIn: {resume.linkedin}</p>}
      {resume.github && <p>GitHub: {resume.github}</p>}

      <h3>Education</h3>
      {resume.education.map((edu, i) => (
        <p key={i}>{edu.degree} at {edu.school} ({edu.year})</p>
      ))}

      <h3>Experience</h3>
      {resume.experience.map((exp, i) => (
        <p key={i}>{exp.role} at {exp.company} ({exp.year})</p>
      ))}

      <h3>Skills</h3>
      <p>{resume.skills.join(", ")}</p>

      {resume.projects.length > 0 && (
        <>
          <h3>Projects</h3>
          {resume.projects.map((p, i) => (
            <p key={i}>{p.name}: {p.description}</p>
          ))}
        </>
      )}

      {resume.certifications.length > 0 && (
        <>
          <h3>Certifications</h3>
          <p>{resume.certifications.join(", ")}</p>
        </>
      )}

      {resume.training.length > 0 && (
        <>
          <h3>Training</h3>
          <p>{resume.training.join(", ")}</p>
        </>
      )}
    </div>
  );
}

// Modern Template
function ModernTemplate({ resume }) {
  return (
    <div style={{
      padding: "20px",
      fontFamily: "Verdana, sans-serif",
      border: "2px solid #007BFF",
      borderRadius: "10px"
    }}>
      <h1 style={{ color: "#007BFF" }}>{resume.full_name}</h1>
      <p>{resume.email} | {resume.phone} | {resume.location}</p>
      {resume.linkedin && <p>LinkedIn: {resume.linkedin}</p>}
      {resume.github && <p>GitHub: {resume.github}</p>}

      <h3 style={{ borderBottom: "1px solid #007BFF" }}>Education</h3>
      {resume.education.map((edu, i) => (
        <p key={i}>• {edu.degree}, {edu.school} ({edu.year})</p>
      ))}

      <h3 style={{ borderBottom: "1px solid #007BFF" }}>Experience</h3>
      {resume.experience.map((exp, i) => (
        <p key={i}>• {exp.role}, {exp.company} ({exp.year})</p>
      ))}

      <h3 style={{ borderBottom: "1px solid #007BFF" }}>Skills</h3>
      <p>{resume.skills.join(", ")}</p>

      {resume.projects.length > 0 && (
        <>
          <h3 style={{ borderBottom: "1px solid #007BFF" }}>Projects</h3>
          {resume.projects.map((p, i) => <p key={i}>• {p.name}: {p.description}</p>)}
        </>
      )}

      {resume.certifications.length > 0 && (
        <>
          <h3 style={{ borderBottom: "1px solid #007BFF" }}>Certifications</h3>
          <p>{resume.certifications.join(", ")}</p>
        </>
      )}

      {resume.training.length > 0 && (
        <>
          <h3 style={{ borderBottom: "1px solid #007BFF" }}>Training</h3>
          <p>{resume.training.join(", ")}</p>
        </>
      )}
    </div>
  );
}

// Main Preview Component
export default function ResumePreview({ resume, template }) {
  if (!resume) return <p>Please fill the form and select a template.</p>;
  if (template === 1) return <ClassicTemplate resume={resume} />;
  if (template === 2) return <ModernTemplate resume={resume} />;
  return <p>Select a template to preview.</p>;
}
