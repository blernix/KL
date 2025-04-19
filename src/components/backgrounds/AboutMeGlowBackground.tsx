export function AboutMeGlowBackground() {
    return (
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-25"
        aria-hidden="true"
      >
        <svg width="100%" height="100%">
          <defs>
          <radialGradient id="glow" cx="50%" cy="30%" r="65%">
  <stop offset="0%" stopColor="white" stopOpacity="0.4" />
  <stop offset="100%" stopColor="black" stopOpacity="0" />
</radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#glow)">
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="20 20"
              dur="40s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
    );
  }