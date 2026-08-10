import { useEffect, useState } from 'react';
import { profile } from './data/cvData.js';
import Profile from './components/Profile.jsx';
import Contact from './components/Contact.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import StatusBar from './components/StatusBar.jsx';
import StatsStrip from './components/StatsStrip.jsx';
import Avatar from './components/Avatar.jsx';

const TABS = [
  { key: 'profile', label: 'profile', n: '01' },
  { key: 'contact', label: 'contact', n: '02' },
  { key: 'skills', label: 'skills', n: '03' },
  { key: 'projects', label: 'projects', n: '04' },
];

export default function App() {
  const [active, setActive] = useState('profile');
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setBooted(true), 60);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="shell">
      <div className={`window ${booted ? 'is-booted' : ''}`}>
        <div className="scanline" />

        <div className="titlebar boot-step boot-1">
          <div className="dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="titlebar-path">
            <span className="prompt-user">saman</span>
            <span className="prompt-sep">@</span>
            <span>devops</span>
            <span className="prompt-sep">:</span>
            <span>~/cv</span>
            <span className="prompt-sep">$</span> ./run --section={active}
          </div>
        </div>

        <div className="hero boot-step boot-2">
          <Avatar />
          <div>
            <div className="hero-eyebrow"><span className="pulse" /> SYSTEM ONLINE</div>
            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-title">{profile.title} · {profile.location}</p>
          </div>
        </div>

        <StatsStrip />

        <nav className="nav boot-step boot-3">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`nav-item ${active === tab.key ? 'active' : ''}`}
              onClick={() => setActive(tab.key)}
              aria-pressed={active === tab.key}
            >
              <span className="n">{tab.n}</span>
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="pane boot-step boot-4">
          <div className="pane-content" key={active}>
            {active === 'profile' && <Profile />}
            {active === 'contact' && <Contact />}
            {active === 'skills' && <Skills />}
            {active === 'projects' && <Projects />}
          </div>
        </div>

        <StatusBar />
      </div>

      <div className="credit">served over nginx · built with react + vite</div>
    </div>
  );
}
