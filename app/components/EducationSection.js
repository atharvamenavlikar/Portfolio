"use client";

import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, duration: 0.6, ease: "easeOut" }
  }
};

const item = {
  hidden: { opacity: 0, x: -30 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut"
    } 
  }
};

export default function EducationSection() {
  const educationData = [
    {
      id: "rit",
      institution: "Rochester Institute of Technology",
      degree: "Master of Science",
      major: "Computer Science",
      gpa: "3.36/4.0",
      location: "Rochester, NY, USA",
      duration: "Aug 2023 - May 2026",
      logo: "/rit.png",
      color: "#f97316",
      coursework: [
        "Machine Learning",
        "Data Structures & Algorithms", 
        "Software Engineering",
        "AI Research",
        "Advanced Algorithms",
        "Database Systems"
      ]
    },
    {
      id: "sppu",
      institution: "Savitribai Phule Pune University",
      degree: "Bachelor of Engineering",
      major: "Computer Science",
      gpa: "3.56/4.0",
      location: "Pune, Maharashtra, India",
      duration: "Aug 2019 - May 2023",
      logo: "/sppu.png",
      color: "#f8f8f8",
      coursework: [
        "Data Structures",
        "Database Systems",
        "Web Development",
        "Software Design",
        "Computer Networks",
        "Operating Systems"
      ]
    }
  ];

  function SchoolLogo({ src, alt, className }) {
    const [broken, setBroken] = React.useState(false);
    if (!broken && src) {
      return (
        <img
          className={className}
          src={src}
          alt={alt}
          width={60}
          height={60}
          onError={() => setBroken(true)}
        />
      );
    }
    return (
      <div className={`${className} edu-logo-fallback`} aria-hidden="true">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3l10 5-10 5L2 8l10-5z"/>
          <path d="M22 12v5c0 1.1-4.5 4-10 4S2 18.1 2 17v-5"/>
          <path d="M7 12v3.5c1.5 1 3.2 1.5 5 1.5s3.5-.5 5-1.5V12"/>
        </svg>
      </div>
    );
  }

  return (
    <section id="education" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Academic <span className="text-gradient">Background</span>
      </motion.h2>

      <motion.div
        className="edu-horizontal-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="edu-horizontal-timeline">
          <div className="edu-timeline-line"></div>
          
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="edu-horizontal-item"
              style={{ '--edu-color': edu.color }}
              variants={item}
            >
              <div className="edu-horizontal-card">
                <div className="edu-card-header">
                  <div className="edu-logo-container">
                    <SchoolLogo src={edu.logo} alt={`${edu.institution} logo`} className="edu-logo" />
                  </div>
                          <div className="edu-header-content">
                            <h3 className="edu-degree-title">{edu.degree} in {edu.major}</h3>
                            <div className="edu-institution-details">
                              <span className="edu-institution">{edu.institution}</span>
                              <span className="edu-duration">{edu.duration}</span>
                            </div>
                            <div className="edu-location-details">
                              <span className="edu-location">{edu.location}</span>
                            </div>
                          </div>
                </div>
                
                        <div className="edu-coursework-section">
                            <div className="edu-specialization">
                              <ul className="edu-specialization-list">
                                <li className="edu-specialization-item">
                                  {edu.id === 'rit' 
                                    ? 'Specialized in AI-Driven Data Systems and Machine Learning Innovation'
                                    : 'Graduated with First Class with Distinction and Honours in Data Science, emphasizing algorithmic thinking and system design'
                                  }
                                </li>
                              </ul>
                            </div>
                          <div className="edu-coursework">
                            <ul className="edu-coursework-header-list">
                              <li className="edu-coursework-header-item">Coursework: {edu.coursework.join(', ')}</li>
                            </ul>
                          </div>
                        </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}



