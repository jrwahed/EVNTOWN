import { motion } from "framer-motion";

const ManifestoSection = () => (
  <section className="py-[140px] relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,102,52,0.15) 0%, transparent 65%)" }} />
    <div className="mx-auto max-w-content px-6 text-center relative z-10">
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl md:text-6xl lg:text-[72px] font-black mb-6 leading-[1.1]"
      >
        الدنيا برا بتحصل كل يوم
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-subtle text-xl md:text-2xl font-medium"
      >
        السؤال… إنت هتكون جزء منها ولا لأ؟
      </motion.p>
    </div>
  </section>
);

export default ManifestoSection;
