export function DirectusGridBackground() {
    return (
      <div
        className="pointer-events-none absolute inset-0 opacity-20 z-0"
        aria-hidden="true"
      >
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M60 0 L0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)">
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="30 30"
              dur="30s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
    );
  }