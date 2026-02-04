import { motion } from 'framer-motion';
import { Lightbulb, Sparkles, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: Lightbulb,
    title: 'Spark Innovation',
    description: 'Discover breakthrough ideas that inspire new ways of thinking and problem-solving.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80',
  },
  {
    icon: Sparkles,
    title: 'Get Inspired',
    description: 'Hear stories of resilience and triumph that will motivate your personal journey.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80',
  },
  {
    icon: Award,
    title: 'Become a Leader',
    description: 'Connect with changemakers and position yourself at the forefront of innovation.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
  },
];

const WhyJoinSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Join <span className="text-ted-red">TEDxFUTO</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              TEDxFUTO is more than an event—it's a catalyst for transformation. Join a community of thinkers, dreamers, and doers who believe in the power of ideas to change the world.
            </p>

            <div className="space-y-8 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl ted-gradient flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="ted-gradient text-primary-foreground font-semibold px-8"
              asChild
            >
              <a href="/partners">Discover More</a>
            </Button>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative overflow-hidden rounded-2xl ${
                  index === 0 ? 'col-span-2 h-64' : 'h-48'
                }`}
              >
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-sm font-semibold text-foreground">{benefit.title}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
