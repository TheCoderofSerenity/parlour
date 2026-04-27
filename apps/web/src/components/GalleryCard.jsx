import React from 'react';
import { motion } from 'framer-motion';
import pb from '@/lib/pocketbaseClient';

const GalleryCard = ({ image, index }) => {
  const imageUrl = pb.files.getUrl(image, image.image, { thumb: '300x300' });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={image.title || 'Gallery image'}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      {image.title && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <h3 className="font-semibold text-lg">{image.title}</h3>
            {image.description && (
              <p className="text-sm opacity-90 mt-1">{image.description}</p>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default GalleryCard;