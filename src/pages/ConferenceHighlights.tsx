import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

const ConferenceHighlights = () => {
  return (
    <Layout>
      {/* Hero / Intro Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Conference <span className="text-ted-red">Highlights</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Relive the ideas, the energy, and the impact of TEDxFUTO — from inspiring talks to powerful moments and community-driven experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section One - Inspiring Talks */}
      <section id="inspiring-talks" className="section-padding bg-background/50">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Inspiring <span className="text-ted-red">Talks</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Watch thought-provoking presentations from visionary speakers who have graced the TEDxFUTO stage.
            </p>
          </motion.div>

          {/* Clean structured grid of talk cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-ted-red/20 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-ted-red border-b-8 border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
                  <p className="text-sm text-muted-foreground mb-4">TEDxFUTO Talk</p>
                  <span className="text-xs text-muted-foreground/70 italic">
                    Talks will be available after the event
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Two - Community Impact */}
      <section id="community-impact" className="section-padding">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Community <span className="text-ted-red">Impact</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore the connections, stories, and community-driven experiences that define TEDxFUTO.
            </p>
          </motion.div>

          {/* Masonry / staggered grid with mixed image sizes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Wide image - spans 2 columns */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="col-span-2 row-span-1"
            >
              <div className="aspect-[2/1] bg-gradient-to-br from-muted via-muted/80 to-muted/50 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-muted-foreground/50 text-sm">Community moments coming soon</p>
                </div>
              </div>
            </motion.div>

            {/* Two stacked portrait images */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-1 row-span-2"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-ted-red/10 via-muted to-muted/50 rounded-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="col-span-1 row-span-2"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-muted/50 via-muted to-ted-red/5 rounded-2xl" />
            </motion.div>

            {/* Square image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-1"
            >
              <div className="aspect-square bg-gradient-to-br from-muted to-muted/70 rounded-2xl" />
            </motion.div>

            {/* Another square */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="col-span-1"
            >
              <div className="aspect-square bg-gradient-to-br from-ted-red/5 via-muted to-muted rounded-2xl" />
            </motion.div>

            {/* Wide bottom image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-2"
            >
              <div className="aspect-[2/1] bg-gradient-to-br from-muted/80 via-muted to-ted-red/10 rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Three - Event Moments */}
      <section id="event-moments" className="section-padding bg-background/50">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Event <span className="text-ted-red">Moments</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              A visual journey through the energy, emotions, and breakthrough moments of TEDxFUTO.
            </p>
          </motion.div>

          {/* Visual collage - memory lane style with varied sizes and offsets */}
          <div className="relative">
            {/* Desktop collage layout */}
            <div className="hidden md:block">
              <div className="grid grid-cols-12 gap-4 auto-rows-[100px]">
                {/* Large dominant image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="col-span-6 row-span-4"
                >
                  <div className="w-full h-full bg-gradient-to-br from-ted-red/20 via-muted to-muted/80 rounded-2xl relative overflow-hidden">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-muted-foreground/60 text-sm italic">
                        Full highlights will be available after TEDxFUTO 2026
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Clustered smaller images - top right */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="col-span-3 row-span-2"
                >
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted/60 rounded-xl" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="col-span-3 row-span-3"
                >
                  <div className="w-full h-full bg-gradient-to-br from-muted/80 via-ted-red/10 to-muted rounded-xl" />
                </motion.div>

                {/* Square near center */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="col-span-2 row-span-2 col-start-7"
                >
                  <div className="w-full h-full bg-gradient-to-br from-ted-red/15 to-muted rounded-xl" />
                </motion.div>

                {/* Landscape at bottom right */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                  className="col-span-4 row-span-2 col-start-9"
                >
                  <div className="w-full h-full bg-gradient-to-br from-muted to-ted-red/10 rounded-xl" />
                </motion.div>

                {/* Small offset images - adds visual rhythm */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="col-span-2 row-span-2 col-start-7 row-start-4"
                >
                  <div className="w-full h-full bg-gradient-to-br from-muted/70 to-muted rounded-xl" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                  className="col-span-3 row-span-2 col-start-9 row-start-5"
                >
                  <div className="w-full h-full bg-gradient-to-br from-ted-red/5 via-muted to-muted/80 rounded-xl" />
                </motion.div>
              </div>
            </div>

            {/* Mobile stacked layout - preserves hierarchy */}
            <div className="md:hidden space-y-4">
              {/* Large dominant image first */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-ted-red/20 via-muted to-muted/80 rounded-2xl relative overflow-hidden">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-muted-foreground/60 text-sm italic">
                      Full highlights will be available after TEDxFUTO 2026
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Two side by side */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="aspect-square bg-gradient-to-br from-muted to-muted/60 rounded-xl" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <div className="aspect-[3/4] bg-gradient-to-br from-muted/80 via-ted-red/10 to-muted rounded-xl" />
                </motion.div>
              </div>

              {/* Landscape */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="aspect-[2/1] bg-gradient-to-br from-muted to-ted-red/10 rounded-xl" />
              </motion.div>

              {/* Two more side by side */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                >
                  <div className="aspect-square bg-gradient-to-br from-muted/70 to-muted rounded-xl" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="aspect-square bg-gradient-to-br from-ted-red/5 via-muted to-muted/80 rounded-xl" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ConferenceHighlights;
