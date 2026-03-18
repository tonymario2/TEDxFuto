import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface MemoryItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

const memories: MemoryItem[] = [
  {
    year: "Vision",
    title: "The Spark of Ideas",
    description: "It started with a simple question: How can we bridge the gap between innovation and our local community? Our journey began with a shared vision.",
    image: "/images/Community Impact.avif"
  },
  {
    year: "Process",
    title: "Crafting the Stage",
    description: "Months of meticulous curation, design sessions, and technical rehearsals. Every detail was shaped to create a premium experience.",
    image: "/images/Inspiring Talks.avif"
  },
  {
    year: "Success",
    title: "Impact Made",
    description: "TEDxFUTO 2026 became a reality. A day where ideas crossed boundaries and the FUTO community witnessed the power of spreading genius.",
    image: "/images/Event Moments.avif"
  }
];

const MemoryLane: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative py-20 px-4">
      {/* Central Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ted-red/30 to-transparent transform -translate-x-1/2 hidden md:block" />
      
      <div className="max-w-6xl mx-auto space-y-32">
        {memories.map((memory, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
            >
              {/* Year/Title Content */}
              <div className={`flex-1 text-center ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                <span className="text-5xl md:text-7xl font-black text-ted-red/20 mb-4 block">
                  {memory.year}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{memory.title}</h3>
                <p className="text-muted-foreground text-lg max-w-md mx-auto md:mx-0">
                  {memory.description}
                </p>
              </div>

              {/* Central Circle */}
              <div className="relative w-4 h-4 rounded-full bg-ted-red z-10 hidden md:block">
                <div className="absolute inset-0 rounded-full bg-ted-red animate-ping" />
              </div>

              {/* Image */}
              <div className="flex-1 w-full relative">
                <div className="aspect-[16/10] rounded-3xl overflow-hidden glass-card p-2">
                  <img 
                    src={memory.image} 
                    alt={memory.title} 
                    className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                {/* Decorative Elements */}
                <div className={`absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-ted-red/30 rounded-tr-3xl -z-10`} />
                <div className={`absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-ted-red/30 rounded-bl-3xl -z-10`} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MemoryLane;
