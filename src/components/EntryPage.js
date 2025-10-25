import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
      {/* Background with pizza image and effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-pizza-red/20 to-pizza-yellow/20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><circle cx="200" cy="200" r="180" fill="%23F4D35E"/><circle cx="200" cy="200" r="160" fill="%23E63946"/><circle cx="200" cy="200" r="140" fill="%23F4D35E"/><circle cx="200" cy="200" r="120" fill="%23E63946"/><circle cx="200" cy="200" r="100" fill="%23F4D35E"/><circle cx="200" cy="200" r="80" fill="%23E63946"/><circle cx="200" cy="200" r="60" fill="%23F4D35E"/><circle cx="200" cy="200" r="40" fill="%23E63946"/><circle cx="200" cy="200" r="20" fill="%23F4D35E"/></svg>')`
          }}
        />
      </div>

      {/* Animated cheese drips */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="cheese-drip absolute"
          style={{
            left: `${20 + i * 10}%`,
            top: `${10 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, 20, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Sparkles */}
      {[...Array(12)].map((_, i) => (
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
          Welcome to the Secret Pizza Club 🍕✨
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
