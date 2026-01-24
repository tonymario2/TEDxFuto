import { motion } from 'framer-motion';

const QuoteSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
          alt="Speaker at event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Quote Content */}
      <div className="relative z-10 container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-display italic text-foreground leading-relaxed mb-8">
            "The journey toward achieving the impossible is rarely smooth. Through resilience, discipline, and persistence, challenges transform into growth."
          </p>
          <div className="w-20 h-1 ted-gradient mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
