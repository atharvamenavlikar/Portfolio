"use client";

import { useEffect, useRef } from 'react';

export default function ProjectsSection() {
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
            
            // Animate project cards
            entry.target.querySelectorAll('.project-card').forEach((el, index) => {
              el.style.animationDelay = `${index * 0.1}s`;
              el.classList.add('project-animate');
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

  const projects = [
    {
      title: "CarCheck: Used Car Price Predictor",
      description: "Developed a sentiment analysis model using Naive Bayes and SVM algorithms to classify product-related tweets as positive, negative, or neutral. Built a comprehensive data pipeline with preprocessing and feature engineering for accurate sentiment classification.",
      stack: ["NumPy", "Pandas", "Matplotlib", "Flask", "Python"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      category: "Machine Learning"
    },
    {
      title: "Sentiment Analysis Classifier",
      description: "Machine learning pipeline for product sentiment analysis using social media data. Implements Naive Bayes and SVM algorithms with comprehensive data preprocessing and feature engineering.",
      stack: ["Python", "scikit-learn", "Pandas"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      category: "Machine Learning"
    },
    {
      title: "Movie Recommendation Engine",
      description: "Intelligent content recommendation system using cosine similarity algorithms. Analyzes multiple dimensions including keywords, ratings, director preferences, and cast information for personalized suggestions.",
      stack: ["Python", "NumPy", "Pandas"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      category: "Recommendation System"
    }
  ];

  return (
    <section id="projects" className="section" ref={sectionRef}>
      <h2 className="section-title">
        Featured <span className="text-gradient">Projects</span>
      </h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-header">
              <img 
                src={project.icon} 
                alt={`${project.title} icon`}
                className="project-icon"
              />
              <h3 className="project-title">{project.title}</h3>
              <span className="project-category">{project.category}</span>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-stack">
              {project.stack.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
