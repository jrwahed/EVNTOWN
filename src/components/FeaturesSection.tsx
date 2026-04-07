import FadeInUp from "./FadeInUp";

const MapIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
);

const MoodIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const CommunityIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const WheelIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 2v7M12 15v7M2 12h7M15 12h7"/>
    <path d="M4.93 4.93l4.95 4.95M14.12 14.12l4.95 4.95M4.93 19.07l4.95-4.95M14.12 9.88l4.95-4.95"/>
  </svg>
);

const features = [
  { icon: <MapIcon />, title: "خريطة تفاعلية", desc: "تشوف كل الـEvents اللي حواليك في لحظة" },
  { icon: <MoodIcon />, title: "اختيار حسب المود", desc: "تحدد اللي يناسبك والتطبيق يرشحلك" },
  { icon: <CommunityIcon />, title: "مجتمعات حسب اهتماماتك", desc: "كل جديد يوصلك أول بأول" },
  { icon: <WheelIcon />, title: "Lucky Wheel", desc: "فرصة تكسب تذاكر وتحضر Events مجانًا" },
];

const FeaturesSection = () => (
  <section className="py-[120px]">
    <div className="mx-auto max-w-content px-6">
      <FadeInUp>
        <h2 className="text-3xl md:text-4xl lg:text-[46px] font-black text-center mb-16 leading-tight">
          إيه اللي هتلاقيه جوه التطبيق
        </h2>
      </FadeInUp>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <FadeInUp key={i} delay={i * 0.08}>
            <div className="glass-card card-glow-border rounded-2xl p-8 md:p-10 text-center h-full cursor-default">
              <div className="text-primary mb-6 flex justify-center">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-subtle text-sm leading-relaxed">{f.desc}</p>
            </div>
          </FadeInUp>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
