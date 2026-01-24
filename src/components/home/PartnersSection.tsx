import { motion } from 'framer-motion';

const partners = [
  { name: 'Partner 1', logo: 'https://via.placeholder.com/200x80/1a1a1a/666?text=Partner+1' },
  { name: 'Partner 2', logo: 'https://via.placeholder.com/200x80/1a1a1a/666?text=Partner+2' },
  { name: 'Partner 3', logo: 'https://via.placeholder.com/200x80/1a1a1a/666?text=Partner+3' },
  { name: 'Partner 4', logo: 'https://via.placeholder.com/200x80/1a1a1a/666?text=Partner+4' },
  { name: 'Partner 5', logo: 'https://via.placeholder.com/200x80/1a1a1a/666?text=Partner+5' },
  { name: 'Partner 6', logo: 'https://via.placeholder.com/200x80/1a1a1a/666?text=Partner+6' },
];

const PartnersSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Partners & <span className="text-ted-red">Sponsors</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thank you to our partners and sponsors who make TEDxFUTO possible.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 opacity-60 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          * Partner logos are placeholders. Actual partners will be confirmed.
        </p>
      </div>
    </section>
  );
};

export default PartnersSection;
