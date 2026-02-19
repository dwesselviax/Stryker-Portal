'use client';

export function ProgressRing({ value = 0, size = 120, strokeWidth = 10, label, sublabel }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#F5F5F5"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#FFB500"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-700"
        />
      </svg>
      <div className="mt-2 text-center">
        <p className="text-2xl font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>{value}%</p>
        {label && <p className="text-xs font-bold uppercase tracking-wider text-[#545857]" style={{ fontFamily: 'var(--font-heading)' }}>{label}</p>}
        {sublabel && <p className="text-xs text-[#545857]">{sublabel}</p>}
      </div>
    </div>
  );
}
