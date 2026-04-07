import FadeInUp from "./FadeInUp";
import EvntownLogo from "./EvntownLogo";

const SolutionSection = () => (
  <section className="py-[120px] relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,102,52,0.1) 0%, transparent 70%)" }} />
    <div className="mx-auto max-w-content px-6 text-center relative z-10">
      <FadeInUp>
        <EvntownLogo className="h-24 md:h-32 text-primary mx-auto mb-8" />
      </FadeInUp>
      <FadeInUp delay={0.1}>
        <h2 className="text-3xl md:text-4xl lg:text-[46px] font-black mb-8 leading-tight">
          EVNTOWN خلّى الموضوع أبسط
        </h2>
      </FadeInUp>
      <FadeInUp delay={0.2}>
        <p className="text-subtle text-lg md:text-xl max-w-xl mx-auto mb-3 leading-relaxed">
          كل الـEvents اللي حواليك في مكان واحد — واضح وسريع
        </p>
        <p className="text-subtle text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
          تفتح التطبيق وتلاقي كل حاجة قدامك
        </p>
      </FadeInUp>
    </div>
  </section>
);

export default SolutionSection;
