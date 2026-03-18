import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface TalkCardProps {
  title: string;
  speaker: string;
  thumbnail: string;
  youtubeId: string;
}

const TalkCard: React.FC<TalkCardProps> = ({ title, speaker, thumbnail, youtubeId }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ y: -5 }}
          className="glass-card rounded-2xl overflow-hidden cursor-pointer group"
        >
          <div className="relative aspect-video overflow-hidden">
            <img 
              src={thumbnail} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-ted-red/80 flex items-center justify-center transform transition-transform group-hover:scale-110">
                <Play className="text-white fill-current w-6 h-6 ml-1" />
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="text-ted-red font-semibold text-sm mb-1">{speaker}</p>
            <h3 className="text-lg font-bold line-clamp-2">{title}</h3>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 bg-black overflow-hidden border-none shadow-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>{title} - {speaker}</DialogTitle>
        </DialogHeader>
        <AspectRatio ratio={16 / 9}>
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-none"
          ></iframe>
        </AspectRatio>
      </DialogContent>
    </Dialog>
  );
};

export default TalkCard;
