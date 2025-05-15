const CV = (
  <div className="cv-card">
    <h2>Azzam Alshaye</h2>
    <div className="cv-contact">
      LinkedIn:{" "}
      <a
        href="http://www.linkedin.com/in/azzam-alshaye"
        target="_blank"
        rel="noreferrer"
      >
        azzam-alshaye
      </a>{" "}
      ❖ Portfolio:{" "}
      <a
        href="https://azzamalshaye.github.io/index.html"
        target="_blank"
        rel="noreferrer"
      >
        azzamalshaye.github.io
      </a>
      <br />
      Email: <a href="mailto:azzamalshaye@gmail.com">
        azzamalshaye@gmail.com
      </a>{" "}
      ❖ Phone: 055-301-4227 ❖ Riyadh, Saudi Arabia
    </div>

    <div className="cv-section">
      <h3>WORK EXPERIENCE</h3>
      <p>
        <strong>Intern/Co-op training – ADLAS Education Company</strong>
        <br />
        Aug 2024 – Oct 2024 (3 months) | Riyadh, Saudi Arabia | On-site
      </p>
      <ul>
        <li>
          Developed a mobile application using Flutter, enhancing performance
          and refining key components for improved functionality.
        </li>
        <li>
          Designed and built visually appealing, user-friendly interfaces with
          Dart, focusing on user experience.
        </li>
        <li>
          Collaborated on the Saudi National Day Fashion Competition website,
          managing end‐to‐end development.
        </li>
        <li>
          Strengthened teamwork, problem-solving, and programming skills through
          collaborative projects.
        </li>
      </ul>
    </div>

    <div className="cv-section">
      <h3>CERTIFICATIONS</h3>
      <ul>
        <li>
          <strong>Professional Epic React Workshops</strong> – Kent C. Dodds
          (March 2025)
          <br />
          Source:{" "}
          <a href="https://www.epicreact.dev/" target="_blank" rel="noreferrer">
            epicreact.dev
          </a>
        </li>
        <li>
          <strong>AI Fundamentals with Capstone Project</strong> – IBM (February
          2025)
          <br />
          Cert #: bc231f87-cc69-4635-a1b9-6e0a0672597e
        </li>
        <li>
          <strong>Dart & Flutter: The Complete Developer's Guide</strong> –
          Udemy (April 2024)
          <br />
          Cert #: UC-24b1afd9-6b08-4c45-b4cf-8194b0337ba4
        </li>
      </ul>
    </div>

    <div className="cv-section">
      <h3>EDUCATION</h3>
      <p>
        <strong>B.Sc. Information Systems</strong>
        <br />
        Imam Muhammad ibn Saud Islamic University – Riyadh, Saudi Arabia
        <br />
        September 2019 – November 2024 | Grade: Very Good (B)
      </p>
    </div>

    <div className="cv-section">
      <h3>SKILLS</h3>
      <p>
        <strong>Personal Traits:</strong> Teamwork, Adaptability, Strong Work
        Ethic, Communication, Leadership, Creativity, Problem-Solving, Time
        Management, Attention to Detail
      </p>
      <p>
        <strong>Key Skills:</strong> Software & Web Development, Database Mgmt,
        Dart/Flutter, HTML, Firebase, Java, CSS/Tailwind/Bootstrap, NoSQL,
        Python, JavaScript/TypeScript, SQL, React, State Management, Git/GitHub
      </p>
      <p>
        <strong>Languages:</strong> Arabic, English
      </p>
    </div>
  </div>
);
const root = document.getElementById("main-dev");
ReactDOM.render(CV, root);
