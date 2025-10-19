import "./globals.css";
import Script from "next/script";

/** ==== GOOGLE DRIVE RESUME LINK ==== */
const DRIVE_FILE_ID = "1PUHy3wDvpdYwviyeJ1zJmFw9S1FOXEC4";
const DRIVE_VIEW_URL = `https://drive.google.com/file/d/${DRIVE_FILE_ID}/view?usp=sharing`;

export const metadata = {
  title: "Atharva Menavlikar — Portfolio",
  description: "AI & data systems you can ship.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* IntersectionObserver active-link highlighting */}
        <Script id="active-nav" strategy="afterInteractive">
          {`
            (function () {
              function clearActive(){document.querySelectorAll('.nav .nav-link').forEach(a=>a.classList.remove('active'))}
              function setActiveById(id){clearActive();const el=document.querySelector('.nav .nav-link[href="/#'+id+'"]');if(el)el.classList.add('active')}
              function setFromHash(){const hash=(window.location.hash||'#about').replace('#','');setActiveById(hash)}
              function init(){
                const sections=Array.from(document.querySelectorAll('section[id]'));
                if(sections.length){
                  const observer=new IntersectionObserver((entries)=>{
                    const vis=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);
                    if(vis[0]) setActiveById(vis[0].target.id);
                  },{threshold:[0.25,0.5,0.75],rootMargin:"-80px 0px -40% 0px"});
                  sections.forEach(s=>observer.observe(s));
                }
                window.addEventListener('hashchange', setFromHash);
                setFromHash();
              }
              if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",init,{once:true})} else {init();}
            })();
          `}
        </Script>

        <header className="header">
          <div className="header-inner">
            <a className="gradient-text" href="/">Atharva Menavlikar</a>
            <nav className="nav" aria-label="Main">
              <a className="nav-link" href="/#about">About</a>
              <a className="nav-link" href="/#education">Education</a>
              <a className="nav-link" href="/#skills">Skills</a>
              <a className="nav-link" href="/#experience">Experience</a>
              <a className="nav-link" href="/#projects">Projects</a>
              <a className="nav-link" href="/#contact">Contact</a>
              <a className="resume-btn btn-gradient-border" href={DRIVE_VIEW_URL} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </nav>
          </div>
        </header>

        <div className="container">
          {children}
          <footer className="footer">
            <div className="footer-bottom footer-bottom--all">
              <div className="footer-quote" aria-label="Signature quote">
              Reproducible today, reliable tomorrow.
              </div>
              <div className="footer-bottom-center">
                <span>© {new Date().getFullYear()} <a href="/#about">Atharva Menavlikar</a></span>
              </div>
              <nav className="footer-links footer-links--bottom" aria-label="Footer">
                <a href="/#about">About</a>
                <a href="/#education">Education</a>
                <a href="/#skills">Skills</a>
                <a href="/#experience">Experience</a>
                <a href="/#projects">Projects</a>
                <a href="/#contact">Contact</a>
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
