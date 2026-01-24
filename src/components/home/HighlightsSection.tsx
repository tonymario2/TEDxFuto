import { motion } from 'framer-motion';
import { Play, Users, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const highlights = [
  {
    icon: Play,
    title: 'Inspiring Talks',
    description: 'Thought-provoking ideas from visionary speakers that challenge perspectives.',
    cta: 'Watch Talks',
    link: '/highlights#inspiring-talks',
  },
  {
    icon: Users,
    title: 'Community Impact',
    description: 'Building connections that foster innovation and positive change in our community.',
    cta: 'View Gallery',
    link: '/highlights#community-impact',
  },
  {
    icon: Camera,
    title: 'Event Moments',
    description: 'Capturing the energy, emotions, and breakthrough moments of TEDxFUTO.',
    cta: 'Explore Highlights',
    link: '/highlights#event-moments',
  },
];

const HighlightsSection = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=80"
          alt="Conference background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/95" />
      </div>

      <div className="relative z-10 container mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conference <span className="text-ted-red">Highlights</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the moments that make TEDxFUTO an unforgettable journey of discovery and inspiration.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-2xl p-8 hover:border-ted-red/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl ted-gradient flex items-center justify-center mb-6">
                <item.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
              <Button
                variant="ghost"
                className="text-ted-red hover:text-ted-red hover:bg-ted-red/10 p-0 font-semibold"
                asChild
              >
                <Link to={item.link}>
                  {item.cta} →
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
