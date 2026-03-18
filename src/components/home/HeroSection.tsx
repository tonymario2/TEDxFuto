import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CalendarDays, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full max-w-full flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/Pictures/Images/Image Until hero Video loads.avif"
          className="absolute inset-0 w-full h-full hero-video"
        >
          <source
            src="/images/Video Background Of Homepage (7).mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto container-padding">
        <div className="max-w-4xl">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 hero-text-shadow"
          >
            <span className="text-ted-red">TEDx</span>
            <span className="text-foreground">FUTO 2026</span>
          </motion.h1>

          {/* Theme */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 hero-text-shadow"
          >
            <span className="text-foreground">The Journey of Resilience:</span>{' '}
            <span className="text-ted-red">Stories That Shape Us</span>
          </motion.p>

          {/* Date & Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6"
          >
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-ted-red" />
              <span className="text-lg">7th February 2026, 9:00 AM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-ted-red" />
              <span className="text-lg">Hall of Excellence (1000 capacity)</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg text-muted-foreground mb-10 max-w-2xl"
          >
            Join us for a transformative day of powerful talks, inspiring stories, and ideas that will reshape how you see resilience and growth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="ted-gradient text-primary-foreground font-semibold px-8 py-6 text-lg"
              asChild
            >
              <a href="https://www.pv.rsvp/tedxfuto-2026" target="_blank" rel="noopener noreferrer">
                Get Tickets
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/30 text-foreground hover:bg-foreground/10 font-semibold px-8 py-6 text-lg"
              asChild
            >
              <a href="/partners">
                Get Involved
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
        >
          <motion.div className="w-1.5 h-3 bg-ted-red rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
