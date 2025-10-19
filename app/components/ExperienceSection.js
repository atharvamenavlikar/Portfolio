"use client";

import { useEffect, useRef } from 'react';

export default function ExperienceSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate title
            const title = entry.target.querySelector('.section-title');
            if (title) {
              title.classList.add('animate-in');
            }
            
            // Animate timeline items
            entry.target.querySelectorAll('.timeline-item').forEach((el, index) => {
              el.style.animationDelay = `${index * 0.15}s`;
              el.classList.add('exp-animate');
            });
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      company: "AppZen",
      logo: "https://cdn.brandfetch.io/idb4RBf6jl/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1672835451241",
      role: "Customer Engineering and Global Support Intern",
      period: "Jun 2024 - Aug 2024",
      location: "Pune, India",
      achievements: [
        "Analyzed and validated 2,000+ customer issues for advanced AI-driven expense auditing models, ensuring high-quality performance and contributing to a 20% increase in user satisfaction",
        "Conducted in-depth data analysis to identify recurring patterns that enhanced model accuracy and resolved bugs, leading to a 30% reduction in error rates and significantly improving system reliability",
        "Categorized and prioritized 150+ customer issues weekly, streamlining workflows and reducing turnaround time by 15%, resulting in a 25% boost in overall customer satisfaction"
      ]
    },
    {
      company: "Bhabha Atomic Research Centre",
      department: "(Department of Atomic Energy, Government of India)",
      logo: "https://cdn.brandfetch.io/idcYTWDEav/w/1800/h/1838/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1756835162672",
      role: "Machine Learning Intern",
      period: "Dec 2022 - May 2023",
      location: "Mumbai, India",
      achievements: [
        "Monitored over 10,000 protein crystal growth images for X-ray crystallography using Convolutional Neural Networks (CNN) and transfer learning, improving growth stage classification accuracy by 25%",
        "Trained a high-resolution image dataset using ResNet-50, achieving 91% accuracy in classifying crystal growth across 4 stages used in X-ray diffraction analysis",
        "Enhanced reliability in crystallization assessments and protein structure analysis, supporting drug discovery and vaccine development through improved crystallization evaluation"
      ]
    },
    {
      company: "DroneAcharya Aerial Innovations Limited",
      logo: "https://cdn.brandfetch.io/idEVMk0YZ1/w/1600/h/707/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1756400604470",
      role: "Software Development Intern",
      period: "Nov 2022 - Jan 2023",
      location: "Pune, India",
      achievements: [
        "Designed and developed a full-stack web interface to visualize drone-captured data as a Web Mapping Service (WMS) for geospatial analysis",
        "Built the backend using Node.js & Express.js, and assisted in developing a responsive frontend with AngularJS, improving user interaction speed by 20%",
        "Utilized MongoDB for efficient geospatial data management and integrated OpenLayers to render interactive maps in the browser",
        "Developed an interactive web page showcasing drone applications in agriculture and surveillance, highlighting real-world use cases to improve operational efficiency and enable data-driven decision-making for clients"
      ]
    }
  ];

  return (
    <section id="experience" className="section" ref={sectionRef}>
      <h2 className="section-title">
        Work <span className="text-gradient">Experience</span>
      </h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div 
            key={exp.company}
            className="timeline-item"
          >
            <div className="timeline-marker">
              <div className="timeline-dot"></div>
            </div>
            
            <article className="experience-card">
              <div className="exp-header">
                <div className="exp-logo-wrapper">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`}
                    className="exp-logo"
                  />
                </div>
                <div className="exp-title-group">
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-company-row">
                    <span className="exp-company">{exp.company}</span>
                    {exp.department && (
                      <span className="exp-company">{exp.department}</span>
                    )}
                  </div>
                  <div className="exp-location">{exp.location}</div>
                </div>
                <span className="exp-period">{exp.period}</span>
              </div>
              
              <ul className="exp-achievements">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

