import { motion } from "framer-motion";
import FadeInUp from "./FadeInUp";

const steps = ["افتح", "اختار", "شوف", "احجز"];

const ArrowIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary rotate-180">
    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HowItWorks = () => (
  <section className="py-[120px]">
    <div className="mx-auto max-w-content px-6">
      <FadeInUp>
        <h2 className="text-3xl md:text-4xl lg:text-[46px] font-black text-center mb-16 leading-tight">
          في أقل من دقيقة
        </h2>
      </FadeInUp>

      {/* Desktop: horizontal */}
      <div className="hidden md:flex items-center justify-center gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-center gap-4"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-2xl font-black mb-3">
                {i + 1}
              </div>
              <span className="font-bold text-lg">{step}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="mt-[-1.5rem]">
                <ArrowIcon />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Mobile: vertical */}
      <div className="flex md:hidden flex-col items-center gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-xl font-black mb-2">
              {i + 1}
            </div>
            <span className="font-bold text-lg">{step}</span>
            {i < steps.length - 1 && (
              <div className="w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent mt-3" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
