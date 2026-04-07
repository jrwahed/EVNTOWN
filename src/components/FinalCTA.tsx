import FadeInUp from "./FadeInUp";

const PlayIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 20.61V3.39c0-1.55 1.7-2.5 3.05-1.71l14.09 8.61c1.28.78 1.28 2.64 0 3.42L6.05 22.32C4.7 23.11 3 22.16 3 20.61z" fill="currentColor"/>
  </svg>
);

const AppleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const FinalCTA = () => (
  <section className="py-[120px]">
    <div className="mx-auto max-w-content px-6 text-center">
      <FadeInUp>
        <h2 className="text-3xl md:text-5xl lg:text-[56px] font-black mb-5 leading-tight">ابدأ دلوقتي</h2>
      </FadeInUp>
      <FadeInUp delay={0.1}>
        <p className="text-subtle text-lg md:text-xl mb-12 max-w-lg mx-auto leading-relaxed">
          حمّل التطبيق وخليك دايمًا عارف إيه اللي بيحصل حواليك
        </p>
      </FadeInUp>
      <FadeInUp delay={0.2}>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.evntown"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow flex items-center gap-3 rounded-full bg-primary px-10 py-4 font-bold text-primary-foreground text-lg"
          >
            <PlayIcon />
            <span>Google Play</span>
          </a>
          <a
            href="https://apps.apple.com/eg/app/evntown/id6745137766"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow flex items-center gap-3 rounded-full border-2 border-foreground/80 px-10 py-4 font-bold text-foreground text-lg hover:border-primary hover:text-primary transition-colors"
          >
            <AppleIcon />
            <span>App Store</span>
          </a>
        </div>
      </FadeInUp>
    </div>
  </section>
);

export default FinalCTA;
