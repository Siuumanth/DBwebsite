import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FinalSection = ({ onGiftClick }) => {
  const [showGift, setShowGift] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleGiftClick = () => {
    setShowGift(true);
    // Play sparkle sound
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBS13yO/eizEIHWq+8+OWT');
    audio.play().catch(() => {});
    
    setTimeout(() => {
      setShowVideo(true);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full max-w-4xl mx-auto text-center px-4 py-12"
    >
      {/* Final Message */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mb-12"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-pizza-yellow">
          <h2 className="text-4xl md:text-6xl font-chewy text-pizza-red mb-6">
            Happy Birthday! 🎉
          </h2>
          
          <motion.div
            className="text-xl md:text-2xl font-poppins text-pizza-brown leading-relaxed space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <p>
              Just like a pizza needs every topping, our memories wouldn't be the same without you.
            </p>
            <p>
              You're that perfect slice that completes the circle. 🍕❤️
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Gift Button */}
      <motion.button
        onClick={handleGiftClick}
        className="bg-pizza-yellow hover:bg-pizza-yellow/90 text-pizza-brown font-chewy text-3xl py-6 px-12 rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-pizza-yellow/50"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 30px rgba(244, 211, 94, 0.5)"
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(244, 211, 94, 0.3)",
            "0 0 30px rgba(244, 211, 94, 0.6)",
            "0 0 20px rgba(244, 211, 94, 0.3)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        Open Your Gift 🎁
      </motion.button>

      {/* Gift Reveal */}
      <AnimatePresence>
        {showGift && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-12"
          >
            {/* Sparkle effects */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="sparkle absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 360, 0]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            ))}

            <div className="bg-gradient-to-br from-pizza-yellow to-pizza-red rounded-3xl p-8 shadow-2xl">
              <h3 className="text-4xl font-chewy text-white mb-4">
                🎁 Your Special Gift! 🎁
              </h3>
              <p className="text-white font-poppins text-xl mb-6">
                A collection of our best memories together!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Section */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-12"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-pizza-green">
              <h3 className="text-3xl font-chewy text-pizza-green mb-6">
                🎬 Birthday Video Message 🎬
              </h3>
              
              {/* Video placeholder - replace with actual video */}
              <div className="relative w-full h-64 md:h-96 bg-gradient-to-br from-pizza-red/20 to-pizza-yellow/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🎥</div>
                  <p className="text-pizza-brown font-poppins text-xl">
                    Birthday Video Coming Soon!
                  </p>
                  <p className="text-pizza-brown font-poppins text-sm mt-2">
                    (Replace this with your actual video)
                  </p>
                </div>
                
                {/* Play button overlay */}
                <motion.button
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300 rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-white text-6xl">▶️</div>
                </motion.button>
              </div>
              
              <p className="text-pizza-brown font-poppins text-lg mt-6">
                A special message just for you! 🎉
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-12"
      >
        <div className="bg-gradient-to-r from-pizza-red/10 to-pizza-yellow/10 rounded-2xl p-6 border-2 border-pizza-red/30">
          <p className="text-2xl font-chewy text-pizza-red mb-2">
            🍕 Thank you for being an amazing friend! 🍕
          </p>
          <p className="text-pizza-brown font-poppins text-lg">
            Here's to many more pizza adventures together! 🚀✨
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FinalSection;
