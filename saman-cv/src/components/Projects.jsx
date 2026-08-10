import { projects } from '../data/cvData.js';
import Icon from './Icon.jsx';

const RULES = [
  { test: /vpc|nat|gateway|peering|endpoint/i, icon: "network", color: "var(--violet)", colorDim: "var(--violet-dim)" },
  { test: /load balanc|elb|scal/i, icon: "scale", color: "var(--accent)", colorDim: "var(--accent-dim)" },
  { test: /gitlab|jenkins|ci\/cd|pipeline/i, icon: "pipeline", color: "var(--signal)", colorDim: "var(--signal-dim)" },
  { test: /docker|ecr|ecs|container/i, icon: "container", color: "var(--violet)", colorDim: "var(--violet-dim)" },
  { test: /iam|kms|secrets|security|encrypt/i, icon: "shield", color: "var(--rose)", colorDim: "var(--rose-dim)" },
  { test: /lambda|config|incident|automat/i, icon: "bolt", color: "var(--accent)", colorDim: "var(--accent-dim)" },
  { test: /trusted advisor|cost|billing/i, icon: "dollar", color: "var(--rose)", colorDim: "var(--rose-dim)" },
  { test: /postgres|mongo|redis|data/i, icon: "database", color: "var(--rose)", colorDim: "var(--rose-dim)" },
  { test: /linux|systemd|server admin/i, icon: "terminal", color: "var(--accent)", colorDim: "var(--accent-dim)" },
  { test: /zabbix|monitor|dashboard/i, icon: "monitor", color: "var(--signal)", colorDim: "var(--signal-dim)" },
];

function categorize(item) {
  const haystack = `${item.title} ${item.stack.join(' ')}`;
  const match = RULES.find((r) => r.test.test(haystack));
  return match || { icon: "cloud", color: "var(--accent)", colorDim: "var(--accent-dim)" };
}

export default function Projects() {
  return (
    <div>
      <div className="pane-head">list projects<span className="cursor" /></div>
      {projects.map((role) => (
        <div className="role-block" key={role.role + role.company}>
          <div className="role-head">
            <div className="role-head-left">
              <span className="role-dot" />
              <div>
                <span className="role-title">{role.role}</span>
                <span className="role-company">@ {role.company}</span>
              </div>
            </div>
            <div className="role-period">{role.period}</div>
          </div>
          <div className="project-grid">
            {role.items.map((p, i) => {
              const meta = categorize(p);
              return (
                <div
                  className="project-card"
                  key={p.title}
                  style={{ '--cat-color': meta.color, '--cat-color-dim': meta.colorDim }}
                >
                  <div className="project-card-head">
                    <div className="project-icon-badge">
                      <Icon name={meta.icon} />
                    </div>
                    <div className="project-index">{String(i + 1).padStart(2, '0')}</div>
                  </div>
                  <div className="project-title">{p.title}</div>
                  <div className="project-desc">{p.description}</div>
                  <div className="project-stack">
                    {p.stack.map((s) => (
                      <span className="stack-chip" key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
