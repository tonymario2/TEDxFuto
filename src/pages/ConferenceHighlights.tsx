import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import TalkCard from '@/components/highlights/TalkCard';
import GalleryAlbum from '@/components/highlights/GalleryAlbum';
import MemoryLane from '@/components/highlights/MemoryLane';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { galleryData } from '@/data/galleryData';

const talks = [
  {
    title: "The Power of Local Innovation",
    speaker: "Toria Dickson",
    thumbnail: "/Pictures/Images/Inspiring Talks.avif",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    title: "Sustainable Tech for Tomorrow",
    speaker: "Julie Adaugo",
    thumbnail: "/Pictures/Images/Community Impact.avif",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    title: "The Future of AI in Africa",
    speaker: "Akwa Man",
    thumbnail: "/Pictures/Images/spark Innovation.avif",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    title: "Renewable Energy in Local Communities",
    speaker: "Iheanacho Precious",
    thumbnail: "/Pictures/Images/Get Inspired.avif",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    title: "The Art of Digital Storytelling",
    speaker: "Gift Muoneke",
    thumbnail: "/Pictures/Images/Become a leader.avif",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    title: "Building Resilient Infrastructure",
    speaker: "Tochukwu Clinton",
    thumbnail: "/Pictures/Images/Event Moments.avif",
    youtubeId: "dQw4w9WgXcQ"
  }
];

const galleryAlbums = [
  {
    title: "Speaker Moments",
    category: "Speakers",
    description: "Capturing the intense moments of delivery and the powerful ideas shared on the red circle.",
    span: "md:col-span-2 md:row-span-1",
    images: galleryData.speakerMoments
  },
  {
    title: "Event Moments",
    category: "Moments",
    description: "The energy, the audience, and the atmosphere that made TEDxFUTO 2026 unforgettable.",
    span: "md:col-span-1 md:row-span-1",
    images: galleryData.eventMoments
  },
  {
    title: "Fireside Chat & Other talks",
    category: "Sessions",
    description: "Deep dives and intimate conversations during our curated firechat sessions.",
    span: "md:col-span-1 md:row-span-1",
    images: galleryData.firesideChat
  },
  {
    title: "Organizers moments",
    category: "Team",
    description: "The faces behind the magic—meet the dedicated team that brought TEDxFUTO 2026 to life.",
    span: "md:col-span-2 md:row-span-1",
    images: galleryData.organizersMoments
  }
];

const ConferenceHighlights = () => {
  const { hash } = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [api, setApi] = useState<CarouselApi>();

  // Handle Resize for Mobile Detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle Hash Navigation (Anchor Scroll)
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [hash]);

  const talksInPairs = [];
  for (let i = 0; i < talks.length; i += 2) {
    talksInPairs.push(talks.slice(i, i + 2));
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ted-red/5 blur-[120px] rounded-full -z-10" />
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              2026 <span className="text-ted-red">Highlights</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Relive the moments, the ideas, and the impact of our most ambitious event yet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Talks Section */}
      <section id="inspiring-talks" className="py-20 bg-background">
        <div className="container mx-auto container-padding">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">The <span className="text-ted-red">Talks</span></h2>
              <p className="text-muted-foreground">Ideas worth spreading, captured for the world to see.</p>
            </div>
          </div>
          
          {isMobile ? (
            <div className="px-4 relative">
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                  {talksInPairs.map((pair, pairIndex) => (
                    <CarouselItem key={pairIndex} className="basis-full">
                      <div className="grid grid-cols-1 gap-8">
                        {pair.map((talk, index) => (
                          <TalkCard key={index} {...talk} />
                        ))}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex items-center justify-center gap-4 mt-8">
                  <CarouselPrevious className="static translate-y-0 bg-ted-red/10 border-ted-red/20 text-ted-red hover:bg-ted-red hover:text-white" />
                  <div className="flex items-center gap-2">
                    {talksInPairs.map((_, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "w-2 h-2 rounded-full transition-all duration-300",
                          Math.floor(api?.selectedScrollSnap() ?? 0) === i 
                            ? "bg-ted-red w-6" 
                            : "bg-ted-red/20"
                        )}
                      />
                    ))}
                  </div>
                  <CarouselNext className="static translate-y-0 bg-ted-red/10 border-ted-red/20 text-ted-red hover:bg-ted-red hover:text-white" />
                </div>
              </Carousel>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {talks.map((talk, index) => (
                <TalkCard key={index} {...talk} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="event-moments" className="py-20 bg-accent/5">
        <div className="container mx-auto container-padding">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Event <span className="text-ted-red">Gallery</span></h2>
            <p className="text-muted-foreground">Explore curated albums from every corner of TEDxFUTO 2026.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[280px] md:auto-rows-[450px]">
            {galleryAlbums.map((album, index) => (
              <GalleryAlbum 
                key={index}
                images={album.images}
                category={album.category}
                title={album.title}
                description={album.description}
                span={album.span}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Road to 2026 Section */}
      <section id="community-impact" className="py-20">
        <div className="container mx-auto container-padding">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Behind the <span className="text-ted-red">Scenes</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The journey that took us from a spark of vision to the red circle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group relative overflow-hidden rounded-2xl aspect-video"
            >
              <img 
                src="/public/Pictures/Organizers moments/PRX_1797.avif"
                alt="The Spark of Ideas"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">The Spark of Ideas</h3>
                <p className="text-white/80 text-sm">Where the vision for 2026 began.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-video"
            >
              <img 
                src="/public/Pictures/Organizers moments/IMG_0727.avif"
                alt="Crafting the Stage"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">Crafting the Stage</h3>
                <p className="text-white/80 text-sm">Turning concepts into a physical reality.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl aspect-video"
            >
              <img 
                src="/public/Pictures/Organizers moments/DSC_2017.avif"
                alt="Impact Made"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">Impact Made</h3>
                <p className="text-white/80 text-sm">The team behind the success of TEDxFUTO 2026.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ConferenceHighlights;
