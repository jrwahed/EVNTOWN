import EvntownLogo from "./EvntownLogo";

const Footer = () => (
  <footer className="py-12" style={{ borderTop: "1px solid rgba(255,102,52,0.15)" }}>
    <div className="mx-auto max-w-content px-6 text-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        <EvntownLogo className="h-7 text-primary" />
        <span className="text-primary font-bold text-xl" style={{ fontStyle: "italic" }}>Evntown</span>
      </div>
      <p className="text-subtle mb-4 font-medium">اكتشف. احجز. اتبسط.</p>
      <p className="text-muted-foreground text-sm">© 2025 Evntown. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
