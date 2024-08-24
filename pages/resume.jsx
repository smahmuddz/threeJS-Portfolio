// src/pages/resume.jsx

import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../src/styles";
import { FaArrowLeft } from "react-icons/fa";

// Import KaTeX for rendering LaTeX
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

const Resume = () => {
  const latexCode = `
    \\documentclass{resume}
    \\begin{document}
    \\name{John Doe}
    \\section{Education}
    \\begin{itemize}
      \\item BS in Computer Science
      \\item MS in Artificial Intelligence
    \\end{itemize}
    \\end{document}
  `;

  return (
    <div className="p-8">
      <Link to="/contact" className="text-white font-medium flex items-center gap-2">
        <FaArrowLeft size={16} /> Back to Contact
      </Link>

      <h1 className={`${styles.sectionHeadText} mt-4`}>Resume</h1>
      <div className="mt-6 p-4 bg-gray-800 rounded-lg">
        <BlockMath math={latexCode} />
      </div>
    </div>
  );
};

export default Resume;
