import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Play, Pause } from 'lucide-react';
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface GalleryAlbumProps {
  images: string[];
  category: string;
  title: string;
  description: string;
  span?: string;
}

const GalleryAlbum: React.FC<GalleryAlbumProps> = ({ images, category, title, description, span }) => {
  const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [isSlideshowActive, setIsSlideshowActive] = useState(true);

  // Automatic flowering preview animation (for the card)
  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentPreviewIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Slideshow Logic (for the lightbox)
  useEffect(() => {
    if (!api || !isSlideshowActive || !isOpen) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [api, isSlideshowActive, isOpen]);

  // Pause slideshow on manual interaction
  useEffect(() => {
    if (!api) return;
    
    api.on("select", () => {
      // If the user manually clicks, we could pause, but the user requested a "hybrid" flow.
      // Usually "hybrid" means it plays but allows override. 
      // To prevent jumping, we can reset the timer, but standard setInterval doesn't support easy reset.
      // For now, let's keep it playing unless they explicitly pause.
    });
  }, [api]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className={`group relative rounded-3xl overflow-hidden cursor-pointer glass-card border-none ${span || ""}`}
        >
          {/* Animated Background Preview */}
          <div className="absolute inset-0">
            <AnimatePresence initial={false}>
              <motion.img
                key={images[currentPreviewIndex]}
                src={images[currentPreviewIndex]}
                alt={title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "linear" }}
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-60" />
          </div>

          {/* Content Overlay */}
          <div className="relative h-full flex flex-col justify-end p-8 space-y-3">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full bg-ted-red text-white text-[10px] font-bold uppercase tracking-wider">
                {category}
              </span>
              <span className="text-white/80 text-[10px] font-medium backdrop-blur-sm bg-black/20 px-2 py-1 rounded-md">
                {images.length} Photos
              </span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight group-hover:text-ted-red transition-colors duration-300">
              {title}
            </h3>
            
            <p className="text-white/80 text-sm line-clamp-2 max-w-[90%] transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              {description}
            </p>

            <div className="flex items-center space-x-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
              <span className="text-ted-red text-xs font-bold uppercase tracking-widest">Click to Explore</span>
              <div className="w-6 h-[1px] bg-ted-red" />
            </div>

            {/* Expand Icon */}
            <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transform transition-all duration-500 hover:bg-ted-red hover:border-ted-red group-hover:scale-110 opacity-0 group-hover:opacity-100">
              <Maximize2 size={24} />
            </div>
          </div>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="w-screen h-screen max-w-none m-0 p-0 bg-black/95 border-none shadow-2xl overflow-hidden flex flex-col items-center justify-center rounded-none sm:max-w-6xl sm:w-auto sm:h-auto sm:rounded-3xl">
        <DialogHeader className="sr-only">
          <DialogTitle>{title} - Album Gallery</DialogTitle>
        </DialogHeader>
        
        <div className="relative w-full h-full max-h-screen flex flex-col overflow-hidden">
          {/* Header Info (Inside Modal) */}
          <div className="p-6 md:p-8 z-20 pointer-events-none bg-gradient-to-b from-black/80 to-transparent flex justify-between items-start shrink-0">
            <div className="flex-1">
              <span className="text-ted-red font-bold uppercase tracking-widest text-[10px] mb-1 block">{category}</span>
              <h2 className="text-2xl md:text-4xl font-black text-white leading-tight">{title}</h2>
              <p className="text-white/60 mt-1 text-sm max-w-xl line-clamp-1 md:line-clamp-none">{description}</p>
            </div>
            <button 
              onClick={() => setIsSlideshowActive(!isSlideshowActive)}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white/10 hover:bg-ted-red/80 transition-colors flex items-center justify-center text-white backdrop-blur-md"
              title={isSlideshowActive ? "Pause Slideshow" : "Play Slideshow"}
            >
              {isSlideshowActive ? <Pause size={18} /> : <Play size={18} />}
            </button>
          </div>

          {/* Image Carousel */}
          <div className="flex-1 w-full min-h-0 container mx-auto flex items-center justify-center px-4 md:px-20 pb-8 overflow-hidden">
            <Carousel setApi={setApi} className="w-full max-w-5xl flex items-center">
              <CarouselContent>
                {images.map((img, index) => (
                  <CarouselItem key={index} className="flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center p-2 md:p-4">
                      <img 
                        src={img} 
                        alt={`${title} - photo ${index + 1}`} 
                        className="max-w-[90vw] md:max-w-full max-h-[65vh] md:max-h-[75vh] w-auto h-auto object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5 mx-auto"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="flex -left-4 md:-left-12 bg-white/10 hover:bg-white/20 border-white/10 text-white" />
              <CarouselNext className="flex -right-4 md:-right-12 bg-white/10 hover:bg-white/20 border-white/10 text-white" />
            </Carousel>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryAlbum;
