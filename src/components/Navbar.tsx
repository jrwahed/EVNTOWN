import { useEffect, useState } from "react";
import EvntownLogo from "./EvntownLogo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav border-b"
          : "bg-transparent border-b border-transparent"
      }`}
      style={{
        borderBottomColor: scrolled ? "rgba(255,102,52,0.3)" : "transparent",
      }}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        {/* Logo on the right (visually, since RTL) */}
        <div className="flex items-center gap-3">
          <EvntownLogo className="h-9 text-primary" />
          <span
            className="text-2xl font-bold text-primary tracking-tight"
            style={{ fontStyle: "italic" }}
          >
            Evntown
          </span>
        </div>

        {/* CTA on the left */}
        <a
          href="https://play.google.com/store/apps/details?id=com.evntown"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow rounded-full bg-primary px-7 py-2.5 text-sm font-bold text-primary-foreground"
        >
          حمّل التطبيق
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
