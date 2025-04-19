export function AutomationsLinesBackground() {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none opacity-40"
      aria-hidden="true"
    >
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id="moving-lines"
            width="100"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 20 H100"
              stroke="white"
              strokeWidth="0.4"
              strokeDasharray="3 3"
              opacity="0.3"
            />
            <path
              d="M0 30 H100"
              stroke="white"
              strokeWidth="0.4"
              strokeDasharray="1 5"
              opacity="0.15"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#moving-lines)">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="0 40"
            dur="20s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
}