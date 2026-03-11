const WanderBiteLogo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const dims = size === "sm" ? 32 : size === "lg" ? 56 : 40;
  return (
    <div className="flex items-center gap-2">
      <svg width={dims} height={dims} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 4C22 4 14 12 14 22C14 36 32 58 32 58C32 58 50 36 50 22C50 12 42 4 32 4Z" fill="url(#pinGrad)" />
        <circle cx="32" cy="22" r="12" fill="hsl(var(--background))" />
        <path d="M27 16V28" stroke="#ff7a18" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M27 16C27 16 25 18 25 20C25 22 27 22 27 22" stroke="#ff7a18" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M37 16V28" stroke="#ff7a18" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M37 16C37 16 39 18 39 20C39 22 37 22 37 22" stroke="#ff7a18" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M32 18V28" stroke="#2b7cff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="16" r="2" fill="#2b7cff" />
        <defs>
          <linearGradient id="pinGrad" x1="14" y1="4" x2="50" y2="58" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ff7a18" />
            <stop offset="1" stopColor="#2b7cff" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col leading-tight">
        <span className={`font-extrabold ${size === "sm" ? "text-lg" : size === "lg" ? "text-3xl" : "text-xl"}`}>
          <span className="text-brand-orange">Wander</span>
          <span className="text-brand-blue">Bite</span>
        </span>
        {size !== "sm" && (
          <span className="text-[10px] tracking-wider text-muted-foreground uppercase">Food & Travel Apps in One Place</span>
        )}
      </div>
    </div>
  );
};

export default WanderBiteLogo;
