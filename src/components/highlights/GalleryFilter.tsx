import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";

interface GalleryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const GalleryFilter: React.FC<GalleryFilterProps> = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onCategoryChange('All')}
        className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
          activeCategory === 'All' 
            ? 'bg-ted-red text-white shadow-lg shadow-ted-red/25' 
            : 'bg-muted text-muted-foreground hover:bg-muted/80'
        }`}
      >
        All Memories
      </motion.button>
      
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
            activeCategory === category 
              ? 'bg-ted-red text-white shadow-lg shadow-ted-red/25' 
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default GalleryFilter;
