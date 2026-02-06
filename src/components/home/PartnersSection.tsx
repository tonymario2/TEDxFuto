import { motion } from 'framer-motion';

const sponsorLogos = [
  // Platinum sponsor – Diora (kept first, using sample image)
  '/images/New images/Diora sample.jpeg',
  // Priority sponsors in strict order
  '/images/New images/APG Global Sponsor 14.png',
  '/images/New images/OrvellaMedia-logo Sponsor 9.png',
  // Remaining sponsors, internal order preserved
  '/images/New images/Light Craft Sponsor 2.jpeg',
  '/images/New images/Indomie Sponsor 3.avif',
  '/images/New images/Futo Gist Media Sponsor 4.avif',
  '/images/New images/CYBER SEC-CORD NETWORK  Sponsor 6.png',
  '/images/New images/D.p GROUP Sponsor 7.png',
  '/images/New images/George Global Sponsor 8.png',
  '/images/New images/PRINX CONCEPT Sponsor 10.png',
  '/images/New images/SUG Sponsor 11.avif',
  '/images/New images/AddMe Sponsor 12.avif',
  '/images/New images/FilmByPr Sponsor 13.png',
  '/images/New images/HUBEX Sponsor 15.png',
  '/images/New images/Mr Telecom Media Speaker 5.png',
];

const PartnersSection = () => {
  return (
    <section className="section-padding bg-white">
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
            <span style={{ color: '#000000' }}>Partners &</span>{' '}
            <span className="text-ted-red">Sponsors</span>
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center"
        >
          {sponsorLogos.map((logo, index) => {
            const alt = logo.split('/').pop()?.replace(/\.[^/.]+$/, '') ?? 'Sponsor logo';
            const isOrvella = logo.includes('OrvellaMedia-logo Sponsor 9.png');
            const isDiora = logo.includes('Diora sample.jpeg');
            return (
              <motion.div
                key={logo}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex items-center justify-center ${isDiora ? 'col-span-2' : 'col-span-1'
                  }`}
              >
                <img
                  src={logo}
                  alt={alt}
                  className={`w-auto object-contain opacity-80 hover:opacity-100 transition-opacity ${isDiora
                      ? 'max-h-32 md:max-h-40'
                      : isOrvella
                        ? 'max-h-20'
                        : 'max-h-16'
                    }`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        <p className="text-center text-muted-foreground text-sm mt-8" />
      </div>
    </section>
  );
};

export default PartnersSection;
