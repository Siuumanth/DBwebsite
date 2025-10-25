import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Generate image paths for 24 images
  const generateImagePaths = () => {
    const images = [];
    for (let i = 1; i <= 24; i++) {
      images.push({
        id: i,
        src: `/assets/${i}.jpg`,
        alt: `Memory photo ${i}`,
        placeholder: false // Set to true if image doesn't exist
      });
    }
    return images;
  };

  const images = generateImagePaths();

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setSelectedImage(images[currentIndex === images.length - 1 ? 0 : currentIndex + 1]);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setSelectedImage(images[currentIndex === 0 ? images.length - 1 : currentIndex - 1]);
  };

  return (
    <div className="w-full">
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: index * 0.05, 
              duration: 0.5,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            onClick={() => openModal(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            
            {/* Fallback placeholder for missing images */}
            <div className="w-full h-full bg-gradient-to-br from-pizza-yellow/30 to-pizza-red/30 flex items-center justify-center hidden">
              <div className="text-center">
                <div className="text-4xl mb-2">📸</div>
                <div className="text-pizza-brown font-poppins text-sm">
                  Photo {image.id}
                </div>
              </div>
            </div>
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-pizza-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-2xl">👁️</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback for missing images */}
                <div className="w-full h-96 bg-gradient-to-br from-pizza-yellow/30 to-pizza-red/30 flex items-center justify-center hidden">
                  <div className="text-center">
                    <div className="text-8xl mb-4">📸</div>
                    <div className="text-pizza-brown font-poppins text-xl">
                      Photo {selectedImage.id} - Coming Soon!
                    </div>
                  </div>
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-pizza-red/80 hover:bg-pizza-red text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-pizza-red/80 hover:bg-pizza-red text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  →
                </button>
              </div>

              {/* Image info */}
              <div className="p-6 bg-pizza-cream">
                <h3 className="text-2xl font-chewy text-pizza-red mb-2">
                  {selectedImage.alt}
                </h3>
                <p className="text-pizza-brown font-poppins">
                  Memory #{currentIndex + 1} of {images.length}
                </p>
              </div>

              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-pizza-red/80 hover:bg-pizza-red text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
