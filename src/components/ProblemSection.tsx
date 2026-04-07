import FadeInUp from "./FadeInUp";

const ProblemSection = () => (
  <section className="py-[120px]">
    <div className="mx-auto max-w-content px-6">
      <FadeInUp>
        <div className="glass-card card-glow-border rounded-2xl p-10 md:p-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black mb-5 leading-tight">
            بتقضي وقتك بتدور تخرج فين؟
          </h2>
          <p className="text-subtle text-lg md:text-xl mb-8 leading-relaxed">
            بين جروبات وبوستات ولينكات… وكل مرة نفس السؤال
          </p>
          <p className="text-primary text-lg md:text-xl font-bold">
            النتيجة: وقت بيضيع… وخروجات بتفوتك
          </p>
        </div>
      </FadeInUp>
    </div>
  </section>
);

export default ProblemSection;
