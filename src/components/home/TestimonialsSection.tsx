import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: 'TEDxFUTO opened my eyes to possibilities I never knew existed. The speakers were incredible and the energy was electric.',
    name: 'Toby Nwachukwu',
    role: 'Student, FUTO',
    image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=200&q=80',
  },
  {
    quote: 'An experience that truly transformed my perspective on resilience and innovation. I left feeling inspired to create change.',
    name: 'Ngozi Adaeze',
    role: 'Graduate, FUTO',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80',
  },
  {
    quote: 'The stories shared at TEDxFUTO reminded me that greatness comes from perseverance. A must-attend event for every FUTO student.',
    name: 'Chinedu Okafor',
    role: 'Alumni, FUTO',
    image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=200&q=80',
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

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
            What Attendees <span className="text-ted-red">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from those who've experienced the transformative power of TEDxFUTO.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-10 md:p-14 text-center relative"
          >
            <Quote className="h-12 w-12 text-ted-red/30 mx-auto mb-6" />
            <p className="text-xl md:text-2xl font-medium text-foreground mb-8 leading-relaxed">
              "{testimonials[current].quote}"
            </p>
            <div className="flex flex-col items-center">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-ted-red"
              />
              <h4 className="font-semibold text-foreground">{testimonials[current].name}</h4>
              <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-border hover:border-ted-red hover:text-ted-red"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? 'bg-ted-red w-6' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-border hover:border-ted-red hover:text-ted-red"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
