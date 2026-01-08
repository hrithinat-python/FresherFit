import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Front from "./components/front";
import ResumeForm from "./components/ResumeForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/resume" element={<ResumeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
