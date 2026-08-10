import { profile } from '../data/cvData.js';

export default function Profile() {
  return (
    <div>
      <div className="pane-head">view profile<span className="cursor" /></div>
      <p className="summary-text">{profile.summary}</p>

      <ul className="focus-list">
        {profile.focus.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      <div className="edu-card">
        <div className="edu-label">Education</div>
        <div className="edu-school">{profile.education.school}</div>
        <div className="edu-degree">{profile.education.degree}</div>
        <div className="edu-years">{profile.education.years}</div>
      </div>
    </div>
  );
}
