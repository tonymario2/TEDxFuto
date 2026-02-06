import Layout from '@/components/layout/Layout';
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

const Partners = () => {
  return (
    <Layout>
      {/* Hero Section - Full width image */}
      <section className="w-full">
        <img
          src="/images/Top section of the patner page.png.avif"
          alt="TEDxFUTO Partners"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Partners and Sponsors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-ted-red text-sm font-medium tracking-wide">
              Partners and Sponsors
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mt-4 mb-6"
              style={{ color: '#000000' }}
            >
              Our Main Partners and Sponsors
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
              The organising team is delighted to be working with the following local businesses and
              organisations on the delivery of TEDxFUTO
            </p>
          </motion.div>

          {/* Partner Logos Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-8 items-center"
          >
            {sponsorLogos.map((logo, index) => {
              const alt = logo.split('/').pop()?.replace(/\.[^/.]+$/, '') ?? 'Sponsor logo';
              const isOrvella = logo.includes('OrvellaMedia-logo Sponsor 9.png');
              const isDiora = logo.includes('Diora sample.jpeg');
              return (
                <div
                  key={logo}
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
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Call For Sponsorship Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Call For Sponsorship
            </h2>

            <div className="space-y-6 text-muted-foreground">
              <p>
                By sponsoring TEDxFUTO, your brand is having the opportunity to be associated with the most
                unique event in Imo-state. It also gives your brand the leverage of breaking into the untapped
                market of Imo-State. Other benefits also include having your logo on the videos to be uploaded
                on the official TEDx YouTube Channel giving your brand exposure to over 30 million individuals in all
                countries of the world.
              </p>

              <p>
                The huge Networking opportunity at the event would also be an explosive opportunity for your
                brand. The audience would comprise of the young millennials, rural farmers, captains of industries,
                government officials from state to federal, politicians, military and para-military, etc.
              </p>

              <p>
                Aside from the individual brand exposure and benefits, you are helping bridge the gap in society,
                helping shape a better community and humanity.
              </p>

              <p>
                The more your brand name is associated with positive experience the stronger your brand
                awareness will be.
              </p>

              <p className="text-white font-medium">
                Would you like to support the event through partnership or
                sponsorship, email the Organising Team info@tedxfuto@gmail.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
