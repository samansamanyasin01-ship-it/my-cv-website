const paths = {
  cloud: (
    <path d="M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 9.02 4 4 0 0 0 7 18Z" />
  ),
  pipeline: (
    <>
      <circle cx="5" cy="12" r="2.2" />
      <circle cx="12" cy="6" r="2.2" />
      <circle cx="12" cy="18" r="2.2" />
      <circle cx="19" cy="12" r="2.2" />
      <path d="M7 12h3M14 12h3M12 8.2v1.6M12 14.2v1.6" />
    </>
  ),
  container: (
    <>
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
      <path d="M4 7l8 4 8-4M12 11v10" />
    </>
  ),
  blueprint: (
    <>
      <rect x="4" y="4" width="12" height="8" rx="1" />
      <rect x="8" y="12" width="12" height="8" rx="1" />
    </>
  ),
  monitor: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M7 12h2l1.5-4L13 16l1.5-4H17" />
    </>
  ),
  network: (
    <>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <circle cx="12" cy="18" r="2.2" />
      <path d="M7.8 7.2 10.4 16M16.2 7.2 13.6 16M8.2 6h7.6" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="2.6" />
      <path d="M5 6v12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6" />
      <path d="M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6" />
    </>
  ),
  terminal: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="1.6" />
      <path d="M7 9.5 10.5 12 7 14.5M12.5 14.5h4.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 19 6.3v5.4c0 4.6-3 7.6-7 9-4-1.4-7-4.4-7-9V6.3L12 3.5Z" />
      <path d="M9 12l2.2 2.2L15.5 9.5" />
    </>
  ),
  branch: (
    <>
      <circle cx="6" cy="5" r="2" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="12" r="2" />
      <path d="M6 7v10M6 9c0 4 6 3 6 3 3.5 0 4.5-1.4 4.9-3.4" />
    </>
  ),
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  dollar: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.5v11M15.5 9.2c0-1.5-1.6-2.2-3.5-2.2s-3.5.9-3.5 2.4c0 3 7 1.4 7 4.4 0 1.5-1.6 2.4-3.5 2.4s-3.7-.9-3.7-2.4" />
    </>
  ),
  scale: (
    <>
      <rect x="4" y="12" width="4" height="8" rx="0.8" />
      <rect x="10" y="7" width="4" height="13" rx="0.8" />
      <rect x="16" y="3.5" width="4" height="16.5" rx="0.8" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="M11.2 12 19 4.2M15.5 7.7l2.3 2.3M18 5.2l2.3 2.3" />
    </>
  ),
  code: (
    <path d="M9 6 3 12l6 6M15 6l6 6-6 6" />
  ),
};

export default function Icon({ name, className = "" }) {
  const path = paths[name] || paths.code;
  return (
    <svg
      viewBox="0 0 24 24"
      className={`icon ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {path}
    </svg>
  );
}
