import { skills } from '../data/cvData.js';
import Icon from './Icon.jsx';

const CATEGORY_META = {
  "Cloud Platform & Services": { icon: "cloud", color: "var(--accent)", colorDim: "var(--accent-dim)" },
  "DevOps & CI/CD": { icon: "pipeline", color: "var(--signal)", colorDim: "var(--signal-dim)" },
  "Containerization & Orchestration": { icon: "container", color: "var(--violet)", colorDim: "var(--violet-dim)" },
  "Infrastructure as Code": { icon: "blueprint", color: "var(--accent)", colorDim: "var(--accent-dim)" },
  "Monitoring & Observability": { icon: "monitor", color: "var(--signal)", colorDim: "var(--signal-dim)" },
  "Web Servers & Networking": { icon: "network", color: "var(--violet)", colorDim: "var(--violet-dim)" },
  "Databases & Caching": { icon: "database", color: "var(--rose)", colorDim: "var(--rose-dim)" },
  "Operating Systems": { icon: "terminal", color: "var(--accent)", colorDim: "var(--accent-dim)" },
  "Security": { icon: "shield", color: "var(--rose)", colorDim: "var(--rose-dim)" },
  "Version Control": { icon: "branch", color: "var(--signal)", colorDim: "var(--signal-dim)" },
};

export default function Skills() {
  return (
    <div>
      <div className="pane-head">list skills<span className="cursor" /></div>
      <div className="skills-grid">
        {skills.map((group) => {
          const meta = CATEGORY_META[group.category] || { icon: "code", color: "var(--accent)", colorDim: "var(--accent-dim)" };
          return (
            <div
              className="skill-group"
              key={group.category}
              style={{ '--cat-color': meta.color, '--cat-color-dim': meta.colorDim }}
            >
              <div className="skill-group-head">
                <div className="skill-icon-badge">
                  <Icon name={meta.icon} />
                </div>
                <div className="skill-group-title">{group.category}</div>
                <div className="skill-count">{group.items.length}</div>
              </div>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
