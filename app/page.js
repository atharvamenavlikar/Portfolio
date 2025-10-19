export default function HomePage() {
  return (
    <main>
      {/* ABOUT (Hero) */}
      <section id="about" className="hero section">
        <div>
          {/* BIG static-gradient MOTTO */}
          <h1 className="m-hero">
          <span className="mark mark-all">
            Building reliable, AI‑enabled software from data pipelines to production impact.
          </span>
          </h1>

          {/* Intro */}
          <p className="lead" style={{ marginTop: 10 }}>
            Masters student in Computer Science at Rochester Institute of Technology, specializing in machine learning
            and full stack development. I build AI features that work in production, reducing model errors through
            systematic analysis, enabling faster debugging through proper instrumentation, and designing
            architectures that scale.
          </p>
          <p className="lead" style={{ marginTop: 6 }}>
            I focus on the complete picture: data quality, model performance, system reliability, and user
            experience. Every solution prioritizes clarity, observability, and long-term maintainability.
          </p>

          <p className="lead">
          Ready to turn complex data into production features? Let's connect.
          </p>

          {/* Social + Location */} 
          <div className="social-row" aria-label="Social links">
            <a className="social-link" href="https://www.linkedin.com/in/atharva-menavlikar/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2c-1.1 0-2 .9-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a className="social-link" href="https://github.com/atharvamenavlikar" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.5-4-1.5-.6-1.4-1.4-1.7-1.4-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1.1 1.8 2.9 1.3 3.6 1l.1-.8c-2.6-.3-5.3-1.3-5.3-6a4.7 4.7 0 0 1 1.2-3.3 4.4 4.4 0 0 1 .1-3.3s1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2a4.4 4.4 0 0 1 .1 3.3 4.7 4.7 0 0 1 1.2 3.3c0 4.7-2.7 5.7-5.3 6l.8.7v2.7c0 .3.2.6.8.5A12 12 0 0 0 12 .5z"/>
              </svg>
            </a>
            <a className="social-link" href="https://www.instagram.com/_mendis_9217/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
            </a>
            <a className="social-link" href="mailto:atharvamenav@gmail.com" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Photo on the right */}
        <div style={{display:"flex",justifyContent:"center"}}>
          <span className="avatar-wrap">
            <img className="avatar-img" src="/photo.jpg" alt="Atharva Menavlikar" loading="eager" />
          </span>
        </div>
      </section>

      {/* EDUCATION */}
      {require && (
        (() => {
          const EducationSection = require("./components/EducationSection").default;
          return <EducationSection />;
        })()
      )}

      {/* SKILLS */}
      {require && (
        (() => {
          const SkillsSection = require("./components/SkillsSection").default;
          return <SkillsSection />;
        })()
      )}

      {/* EXPERIENCE */}
      {require && (
        (() => {
          const ExperienceSection = require("./components/ExperienceSection").default;
          return <ExperienceSection />;
        })()
      )}

      {/* PROJECTS */}
      {require && (
        (() => {
          const ProjectsSection = require("./components/ProjectsSection").default;
          return <ProjectsSection />;
        })()
      )}

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2 className="contact-title">
          Let&apos;s <span className="text-gradient">Connect</span>
        </h2>

        <p className="contact-subtitle">
          Need help building scalable software solutions or implementing AI-powered features? 
          Let's connect and explore how I can contribute to your technical goals.
        </p>

        <div className="icon-row">
          <a className="icon-btn" href="https://www.linkedin.com/in/atharva-menavlikar/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2c-1.1 0-2 .9-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a className="icon-btn" href="https://github.com/atharvamenavlikar" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.5-4-1.5-.6-1.4-1.4-1.7-1.4-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1.1 1.8 2.9 1.3 3.6 1l.1-.8c-2.6-.3-5.3-1.3-5.3-6a4.7 4.7 0 0 1 1.2-3.3 4.4 4.4 0 0 1 .1-3.3s1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2a4.4 4.4 0 0 1 .1 3.3 4.7 4.7 0 0 1 1.2 3.3c0 4.7-2.7 5.7-5.3 6l.8.7v2.7c0 .3.2.6.8.5A12 12 0 0 0 12 .5z"/>
            </svg>
          </a>
          <a className="icon-btn" href="https://www.instagram.com/_mendis_9217/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.5" />
            </svg>
          </a>
          <a className="icon-btn" href="mailto:atharvamenav@gmail.com" aria-label="Email">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/>
            </svg>
          </a>
        </div>

        <div className="contact-card">
          {/* Form */}
          {require && (
            // Lazy require to avoid SSR mismatch for client component import
            (() => {
              const ContactForm = require("./components/ContactForm").default;
              return <ContactForm />;
            })()
          )}
        </div>
      </section>
    </main>
  );
}
