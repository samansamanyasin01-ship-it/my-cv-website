import { useEffect, useState } from 'react';
import { profile } from '../data/cvData.js';

function formatUptime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${days}d ${hours}:${minutes}:${seconds}`;
}

export default function StatusBar() {
  const [uptime, setUptime] = useState('');

  useEffect(() => {
    const start = new Date(profile.experienceStart).getTime();
    const tick = () => setUptime(formatUptime(Date.now() - start));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="statusbar">
      <div className="statusbar-left">
        <span className="status-online"><span className="pulse" /> available for hire</span>
        <span>region: ap-south-1 (lahore)</span>
      </div>
      <div className="statusbar-right">
        <span>career uptime: {uptime}</span>
      </div>
    </div>
  );
}
