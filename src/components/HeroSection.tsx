import { motion } from "framer-motion";
import EvntownLogo from "./EvntownLogo";

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 20.61V3.39c0-1.55 1.7-2.5 3.05-1.71l14.09 8.61c1.28.78 1.28 2.64 0 3.42L6.05 22.32C4.7 23.11 3 22.16 3 20.61z" fill="currentColor"/>
  </svg>
);

const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden">
    {/* Orange glow orb */}
    <div className="hero-glow" />

    <div className="relative z-10 mx-auto max-w-content px-6 text-center pt-24 pb-20">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
        </span>
        <span className="text-sm font-semibold text-subtle">متاح دلوقتي على iOS و Android</span>
      </motion.div>

      {/* Logo icon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="flex justify-center mb-8"
      >
        <EvntownLogo className="h-[120px] w-[120px] text-primary" />
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-black mb-0 max-w-[900px] mx-auto pt-8"
        style={{ letterSpacing: "0.05em", wordSpacing: "0.15em", lineHeight: 1.4 }}
      >
        بطل تدوير… واختار خروجتك في ثواني
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-[600px] mx-auto mb-12 whitespace-nowrap"
        style={{ fontSize: "18px", fontWeight: 400, color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginTop: "24px" }}
      >
        كل الـEvents اللي حواليك في مكان واحد — اختار حسب مودك واحجز بسهولة
      </motion.p>

      {/* Store buttons */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="https://play.google.com/store/apps/details?id=com.evntown"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground text-base"
        >
          <PlayIcon />
          <span>Google Play</span>
        </a>
        <a
          href="https://apps.apple.com/eg/app/evntown/id6745137766"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow flex items-center gap-3 rounded-full border-2 border-foreground/80 px-8 py-4 font-bold text-foreground text-base hover:border-primary hover:text-primary transition-colors"
        >
          <AppleIcon />
          <span>App Store</span>
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
