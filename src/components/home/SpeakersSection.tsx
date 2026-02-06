import { motion } from 'framer-motion';
import { useState } from 'react';
import { Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

const getSpeakerNameFromImagePath = (imagePath: string) => {
  const fileName = imagePath.split('/').pop() ?? '';
  const withoutExtension = fileName.replace(/\.[^/.]+$/, '');
  const lower = withoutExtension.toLowerCase();
  const speakerIndex = lower.indexOf('speaker');
  const beforeSpeaker =
    speakerIndex >= 0 ? withoutExtension.slice(0, speakerIndex) : withoutExtension;

  const cleaned = beforeSpeaker.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
  return cleaned;
};

const speakersByYear = {
  '2026': [
    { image: '/images/Toria Dickson Speaker 2 (1).avif' },
    { image: '/images/Julie Adaugo Speaker 1.avif' },
    { image: '/images/New images/Akwa man speaker 3.avif' },
    { image: '/images/New images/Iheanacho Precious speaker 4.avif' },
    { image: '/images/New images/Last Speaker.avif', name: 'Gift Muoneke' },
    { image: '/images/New images/Tochukwu Clinton speaker 6.avif' },
  ].map((speaker) => ({
    ...speaker,
    name: speaker.name ?? getSpeakerNameFromImagePath(speaker.image),
    role: speaker.role ?? 'Speaker Role',
  })),
  '2025': [
    { name: 'Chinedu Okafor', role: 'Speaker', image: 'https://ihpenhylfmcl3mb0.public.blob.vercel-storage.com/TEDx%20Futo%20Repo%202/Templated%20speaker%201.jpg' },
    { name: 'Emeka Nwosu', role: 'Speaker', image: 'https://ihpenhylfmcl3mb0.public.blob.vercel-storage.com/TEDx%20Futo%20Repo%202/Templated%20speaker%202.jpg' },
    { name: 'Amina Bello', role: 'Speaker', image: 'https://ihpenhylfmcl3mb0.public.blob.vercel-storage.com/TEDx%20Futo%20Repo%202/Templated%20speaker%206.jpg' },
    { name: 'Sola Adeyemi', role: 'Speaker', image: 'https://ihpenhylfmcl3mb0.public.blob.vercel-storage.com/TEDx%20Futo%20Repo%202/Templated%20speaker%204.jpg' },
  ],
  '2024': [
    { name: 'David Okoro', role: 'Speaker', image: 'https://ihpenhylfmcl3mb0.public.blob.vercel-storage.com/TEDx%20Futo%20Repo%202/Templated%20speaker%205.jpg' },
    { name: 'Ifunanya Nwoye', role: 'Speaker', image: 'https://ihpenhylfmcl3mb0.public.blob.vercel-storage.com/TEDx%20Futo%20Repo%202/Templated%20speaker%207.jpg' },
    { name: 'Bolaji Ibrahim', role: 'Speaker', image: 'https://ihpenhylfmcl3mb0.public.blob.vercel-storage.com/TEDx%20Futo%20Repo%202/Templated%20speaker%203.jpg' },
    { name: 'Blessing Adekunle', role: 'Speaker', image: 'https://ihpenhylfmcl3mb0.public.blob.vercel-storage.com/TEDx%20Futo%20Repo%202/Templated%20speaker%208.jpg' },
  ],
};

const years = Object.keys(speakersByYear).sort((a, b) => Number(b) - Number(a));

const SpeakersSection = () => {
  const [activeYear, setActiveYear] = useState(years[0]);

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-ted-red">Speakers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visionaries, innovators, and storytellers who inspire change.
          </p>
        </motion.div>

        {/* Year Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={cn(
                'px-6 py-2 rounded-full text-sm font-semibold transition-all',
                activeYear === year
                  ? 'ted-gradient text-white'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              )}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Speaker Cards */}
        <motion.div
          key={activeYear}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {speakersByYear[activeYear as keyof typeof speakersByYear].map((speaker, index) => (
            <motion.div
              key={speaker.name + index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] group">
                <div className="w-full h-full transition-transform duration-500 group-hover:scale-110">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                {/* Twitter Icon */}
                <a
                  href="#"
                  className="absolute top-4 right-4 p-2 rounded-full bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-ted-red"
                >
                  <Twitter className="h-4 w-4" />
                </a>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="font-semibold text-base md:text-lg text-foreground">{speaker.name}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">{speaker.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SpeakersSection;
