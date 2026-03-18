import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface GalleryCardProps {
  image: string;
  category: string;
  title?: string;
  aspectRatio?: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ image, category, title, aspectRatio }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ y: -5 }}
          className="relative rounded-2xl overflow-hidden cursor-pointer group"
        >
          <div className={aspectRatio || "aspect-square"}>
            <img 
              src={image} 
              alt={title || category} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-ted-red text-xs font-bold uppercase tracking-widest mb-1">{category}</span>
            <h4 className="text-white font-semibold text-lg">{title || "View Moment"}</h4>
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
              <Maximize2 size={18} />
            </div>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-w-5xl p-0 bg-transparent border-none shadow-none">
        <DialogHeader className="sr-only">
          <DialogTitle>{title || category}</DialogTitle>
        </DialogHeader>
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src={image} 
            alt={title || category} 
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />
          {title && (
            <div className="absolute bottom-[-40px] left-0 text-white">
              <p className="font-semibold">{title}</p>
              <p className="text-sm text-white/60">{category}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryCard;
