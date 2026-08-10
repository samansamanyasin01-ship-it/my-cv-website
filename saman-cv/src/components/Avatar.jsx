import profilePhoto from '../assets/profile.jpg';

const NODES = [
  { label: "EC2", angle: 0 },
  { label: "ECS", angle: 90 },
  { label: "VPC", angle: 180 },
  { label: "CI/CD", angle: 270 },
];

function nodePos(angle, radius = 58, cx = 80, cy = 80) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

export default function Avatar() {
  return (
    <div className="avatar-wrap">
      <svg viewBox="0 0 160 160" className="avatar-svg" aria-hidden="true">
        {/* pulse rings */}
        <circle className="avatar-pulse-ring ring-a" cx="80" cy="80" r="42" />
        <circle className="avatar-pulse-ring ring-b" cx="80" cy="80" r="42" />

        {/* hexagon frame */}
        <polygon
          className="avatar-hex"
          points="80,20 132,50 132,110 80,140 28,110 28,50"
        />

        {/* orbit ring */}
        <g className="avatar-orbit">
          <circle cx="80" cy="80" r="58" className="avatar-orbit-ring" />
          {NODES.map((n) => {
            const p = nodePos(n.angle);
            return (
              <circle key={n.label} cx={p.x} cy={p.y} r="4.5" className="avatar-node-dot" />
            );
          })}
        </g>
      </svg>

      <div className="avatar-photo-mask">
        <img src={profilePhoto} alt="Saman Yaseen" className="avatar-photo" />
      </div>
    </div>
  );
}
