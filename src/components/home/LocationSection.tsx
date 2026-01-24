import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocationSection = () => {
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
            Event <span className="text-ted-red">Location</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join us at the prestigious Hall of Excellence, FUTO.
          </p>
        </motion.div>

        {/* Map and Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.755562955787!2d6.980947!3d5.387977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10425e4d8a5a5a5d%3A0x7f3b4a9e9e9e9e9e!2sFederal%20University%20of%20Technology%20Owerri!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale"
            />
          </div>

          {/* Venue Info */}
          <div className="glass-card rounded-2xl p-8 flex flex-col justify-center">
            <div className="w-14 h-14 rounded-xl ted-gradient flex items-center justify-center mb-6">
              <MapPin className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Hall of Excellence</h3>
            <p className="text-muted-foreground mb-4">
              Federal University of Technology, Owerri
              <br />
              Imo State, Nigeria
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Capacity: 1000 attendees
            </p>
            <Button
              className="ted-gradient text-primary-foreground font-semibold"
              onClick={() =>
                window.open(
                  'https://www.google.com/maps/dir/?api=1&destination=Federal+University+of+Technology+Owerri',
                  '_blank'
                )
              }
            >
              Get Directions
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
