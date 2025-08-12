import { useState } from "react";
import "./Experience.css"; // style file we will add

const experiences = [
  {
    id: 1,
    company: "Deloitte Belgium",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Deloitte.svg",
    role: "Data & AI Intern",
    date: "Feb 2025 – May 2025",
    description: `
      Worked with Microsoft Fabric, Azure DevOps, Rydoo, and Excel.
      Learned agile team collaboration with stand-ups, poker sessions, retrospectives,
      and the use of epics & user stories within Azure DevOps.
      Developed skills in independent work, communication, and professional planning.
    `,
  },
  {
    id: 2,
    company: "NTT Data Belgium",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/NTT_Data_Logo.svg",
    role: "Data & AI Internship Candidate",
    date: "Oct 2024",
    description: `
      Participated in technical interview and project selection process for Data & AI internship.
      Explored potential projects in data science and analytics, gaining insights into project scoping
      and client-focused solution design.
    `,
  },
  {
    id: 3,
    company: "IT Support (Student Job)",
    logo: "https://via.placeholder.com/150?text=IT+Support",
    role: "IT Support Assistant",
    date: "2023",
    description: `
      Assisted staff with hardware/software troubleshooting,
      performed system maintenance, and provided user support
      for daily operational tasks.
    `,
  },
];

export default function Experience() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="experience-card"
            onClick={() => setSelected(exp)}
          >
            <img src={exp.logo} alt={exp.company} className="experience-logo" />
            <h3>{exp.company}</h3>
            <p>{exp.role}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selected.company}</h2>
            <p><strong>{selected.role}</strong></p>
            <p>{selected.date}</p>
            <p>{selected.description}</p>
            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
