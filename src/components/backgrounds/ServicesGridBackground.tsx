export function ServicesGridBackground() {
    return (
      <div
        className="pointer-events-none absolute inset-0 opacity-15 z-0"
        aria-hidden="true"
      >
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="hex"
              width="40"
              height="35"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(1.2)"
            >
              <path
                d="M20 0 L40 10 L40 25 L20 35 L0 25 L0 10 Z"
                fill="none"
                stroke="white"
                strokeWidth="0.4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex)">
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="20 10"
              dur="40s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
    );
  }