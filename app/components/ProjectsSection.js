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
      title: "Backscatter Network Simulator",
      description: "A comprehensive virtual testbed for tag-to-tag backscatter communication protocols. Features an intuitive scenario editor for network topology design and real-time metrics visualization for performance analysis.",
      stack: ["Python", "SimPy", "Plotly"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      category: "Network Simulation",
      github: "https://github.com/atharvamenavlikar/backscatter-simulator"
    },
    {
      title: "GunjIndia AdTech Platform",
      description: "Full-stack advertising technology platform with advanced geospatial targeting capabilities. Built with modern authentication, media storage using GridFS, and intelligent ad placement algorithms.",
      stack: ["Node.js", "Express", "MongoDB"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      category: "AdTech Platform",
      github: "https://github.com/atharvamenavlikar/gunjindia-adtech"
    },
    {
      title: "Neo4j Graph Explorer",
      description: "Interactive graph database visualization tool inspired by IMDB's relationship mapping. Features dynamic color coding, advanced query interfaces, and real-time graph exploration capabilities.",
      stack: ["Neo4j", "D3.js", "React"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neo4j/neo4j-original.svg",
      category: "Data Visualization",
      github: "https://github.com/atharvamenavlikar/neo4j-graph-explorer"
    },
    {
      title: "CarCheck: Used Car Price Predictor",
      description: "Developed a sentiment analysis model using Naive Bayes and SVM algorithms to classify product-related tweets as positive, negative, or neutral. Built a comprehensive data pipeline with preprocessing and feature engineering for accurate sentiment classification.",
      stack: ["NumPy", "Pandas", "Matplotlib", "Flask", "Python"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      category: "Machine Learning",
      github: "https://github.com/atharvamenavlikar/carcheck-price-predictor"
    },
    {
      title: "Sentiment Analysis Classifier",
      description: "Machine learning pipeline for product sentiment analysis using social media data. Implements Naive Bayes and SVM algorithms with comprehensive data preprocessing and feature engineering.",
      stack: ["Python", "scikit-learn", "Pandas"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      category: "Machine Learning",
      github: "https://github.com/atharvamenavlikar/sentiment-classifier"
    },
    {
      title: "Movie Recommendation Engine",
      description: "Intelligent content recommendation system using cosine similarity algorithms. Analyzes multiple dimensions including keywords, ratings, director preferences, and cast information for personalized suggestions.",
      stack: ["Python", "NumPy", "Pandas"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      category: "Recommendation System",
      github: "https://github.com/atharvamenavlikar/movie-recommender"
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
            
            <div className="project-github">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
                aria-label={`View ${project.title} on GitHub`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.5-4-1.5-.6-1.4-1.4-1.7-1.4-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1.1 1.8 2.9 1.3 3.6 1l.1-.8c-2.6-.3-5.3-1.3-5.3-6a4.7 4.7 0 0 1 1.2-3.3 4.4 4.4 0 0 1 .1-3.3s1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2a4.4 4.4 0 0 1 .1 3.3 4.7 4.7 0 0 1 1.2 3.3c0 4.7-2.7 5.7-5.3 6l.8.7v2.7c0 .3.2.6.8.5A12 12 0 0 0 12 .5z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
