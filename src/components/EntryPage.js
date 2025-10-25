import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EntryPage = ({ onSecretKeySubmit }) => {
  const [secretKey, setSecretKey] = useState('');
  const [showError, setShowError] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (secretKey === 'pizzalovesyou') {
      setShowError(false);
      onSecretKeySubmit(true);
    } else {
      setShowError(true);
      onSecretKeySubmit(false);
    }
  };

  const handleInputChange = (e) => {
    setSecretKey(e.target.value);
    setIsGlowing(e.target.value.length > 0);
    setShowError(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
    >
      {/* Background with subtle pizza pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-pizza-cream to-pizza-yellow/30">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle cx="100" cy="100" r="80" fill="%23F4D35E" opacity="0.3"/><circle cx="100" cy="100" r="60" fill="%23E63946" opacity="0.2"/><circle cx="100" cy="100" r="40" fill="%23F4D35E" opacity="0.3"/><circle cx="100" cy="100" r="20" fill="%23E63946" opacity="0.4"/></svg>')`,
            backgroundSize: '300px 300px'
          }}
        />
      </div>

      {/* Subtle background pattern instead of cheese drips */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="3" fill="%23F4D35E"/><circle cx="80" cy="30" r="2" fill="%23E63946"/><circle cx="40" cy="70" r="2.5" fill="%2390BE6D"/><circle cx="70" cy="80" r="2" fill="%23B5651D"/><circle cx="10" cy="60" r="2" fill="%23F4D35E"/><circle cx="90" cy="70" r="2.5" fill="%23E63946"/></svg>')`,
            backgroundSize: '200px 200px'
          }}
        />
      </div>

      {/* Sparkles - Reduced number */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="sparkle absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Main content */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-8 max-w-md mx-auto"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-chewy text-pizza-red mb-4"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Welcome to the Secret Pizza Club Bks 🍕✨
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl font-poppins text-pizza-brown mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Enter the secret key to unlock your slice of memories.
        </motion.p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.input
            type="text"
            value={secretKey}
            onChange={handleInputChange}
            placeholder="Type your secret key here…"
            className={`w-full px-6 py-4 text-lg font-poppins rounded-2xl border-4 transition-all duration-300 focus:outline-none ${
              isGlowing 
                ? 'border-pizza-yellow shadow-pizza-yellow shadow-2xl bg-pizza-yellow/10' 
                : 'border-pizza-brown bg-white/80'
            }`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          />

          <motion.button
            type="submit"
            className="w-full bg-pizza-red hover:bg-pizza-red/90 text-white font-chewy text-2xl py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Let's Go! 🚀
          </motion.button>
        </form>

        {/* Error message */}
        <AnimatePresence>
          {showError && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              className="mt-4 p-4 bg-pizza-red/10 border-2 border-pizza-red rounded-xl"
            >
              <p className="text-pizza-red font-poppins text-lg">
                Oops! That slice doesn't fit the oven. Try again 😜
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default EntryPage;
