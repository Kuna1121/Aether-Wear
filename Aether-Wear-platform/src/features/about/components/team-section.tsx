import type { TeamMember } from "../models";
import "../pages/about.css";

interface TeamSectionProps {
  team: TeamMember[];
}

function DefaultAvatar() {
  return (
    <div className="default-avatar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2563EB"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="default-avatar-icon"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    </div>
  );
}

export default function TeamSection({ team }: TeamSectionProps) {
  return (
    <div className="team-section-container">
      <div className="section-header">
        <h2>Meet The Team</h2>
        <div className="header-underline"></div>
      </div>
      <div className="team-grid">
        {team.map((member) => (
          <div key={member.id} className="team-card">
            <div className="team-image-wrapper">
              {member.image ? (
                <>
                  <img src={member.image} alt={member.name} loading="lazy" />
                  <div className="team-overlay"></div>
                </>
              ) : (
                <DefaultAvatar />
              )}
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
