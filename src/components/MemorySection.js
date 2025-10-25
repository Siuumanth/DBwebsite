import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Gallery from './Gallery';
import FinalSection from './FinalSection';

const MemorySection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showFinalSection, setShowFinalSection] = useState(false);


  const handleMusicToggle = () => {
    setIsPlaying(!isPlaying);
    // You can add actual music control here
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full max-w-6xl mx-auto px-4 py-12"
    >
      {/* Title */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl md:text-7xl font-chewy text-pizza-red mb-4">
          Our Photo Gallery 📸
        </h2>
      </motion.div>

      {/* Photo Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mb-12"
      >
        <Gallery />
      </motion.div>

      {/* Music Toggle */}
      <motion.button
        onClick={handleMusicToggle}
        className="fixed bottom-6 right-6 bg-pizza-yellow hover:bg-pizza-yellow/90 text-pizza-brown p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 3, duration: 0.5 }}
      >
        <div className="text-2xl">
          {isPlaying ? '🔊' : '🔇'}
        </div>
      </motion.button>

      {/* Continue Button */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.8 }}
      >
        <motion.button
          onClick={() => setShowFinalSection(true)}
          className="bg-pizza-green hover:bg-pizza-green/90 text-white font-chewy text-2xl py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Continue the Journey 🚀
        </motion.button>
      </motion.div>

      {/* Final Section */}
      {showFinalSection && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-12"
        >
          <FinalSection />
        </motion.div>
      )}
    </motion.div>
  );
};

export default MemorySection;
