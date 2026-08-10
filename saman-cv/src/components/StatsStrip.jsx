import { useEffect, useRef, useState } from 'react';
import { skills, projects, profile } from '../data/cvData.js';

function useCountUp(target, durationMs = 900) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const start = performance.now();
    let raf;
    const step = (now) => {
      const progress = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);

  return value;
}

function yearsSince(dateStr) {
  const ms = Date.now() - new Date(dateStr).getTime();
  return Math.round((ms / (1000 * 60 * 60 * 24 * 365)) * 10) / 10;
}

export default function StatsStrip() {
  const toolCount = skills.reduce((sum, g) => sum + g.items.length, 0);
  const projectCount = projects.reduce((sum, r) => sum + r.items.length, 0);
  const roleCount = projects.length;
  const years = yearsSince(profile.experienceStart);

  const toolsShown = useCountUp(toolCount);
  const projectsShown = useCountUp(projectCount);
  const rolesShown = useCountUp(roleCount);
  const yearsShown = useCountUp(Math.round(years * 10)) / 10;

  return (
    <div className="stats-strip boot-step boot-2b">
      <div className="stat-item">
        <div className="stat-value">{toolsShown}+</div>
        <div className="stat-label">tools & services</div>
      </div>
      <div className="stat-item">
        <div className="stat-value">{projectsShown}</div>
        <div className="stat-label">projects shipped</div>
      </div>
      <div className="stat-item">
        <div className="stat-value">{rolesShown}</div>
        <div className="stat-label">roles held</div>
      </div>
      <div className="stat-item">
        <div className="stat-value">{yearsShown.toFixed(1)}</div>
        <div className="stat-label">years experience</div>
      </div>
    </div>
  );
}
