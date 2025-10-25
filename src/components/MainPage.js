import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MemorySection from './MemorySection';
import FinalSection from './FinalSection';

const MainPage = ({ onPizzaClick, showMemorySection, showFinalSection, onGiftClick }) => {
  const [pizzaSlices, setPizzaSlices] = useState([
    { id: 1, name: 'Birthday Boy', emoji: '🎉', expression: 'happy', hasHat: true },
    { id: 2, name: 'Girl Slice', emoji: '👁️', expression: 'cute', hasLashes: true },
    { id: 3, name: 'Goofy Slice', emoji: '😛', expression: 'goofy', hasTongue: true },
    { id: 4, name: 'Chill Slice', emoji: '😎', expression: 'chill', hasSunglasses: true }
  ]);

  const [showBalloons, setShowBalloons] = useState(false);
  const [slicesSplit, setSlicesSplit] = useState(false);

  useEffect(() => {
    if (showMemorySection) {
      setShowBalloons(true);
      setSlicesSplit(true);
    }
  }, [showMemorySection]);

  const handlePizzaClick = () => {
    onPizzaClick();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Background with pizza shop table texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-pizza-brown/30 to-pizza-cream">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23B5651D"/><rect width="50" height="50" fill="%23FFF8E7"/><rect x="50" y="50" width="50" height="50" fill="%23FFF8E7"/></svg>')`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating confetti particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="confetti-piece absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: ['#E63946', '#F4D35E', '#90BE6D', '#B5651D'][Math.floor(Math.random() * 4)]
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Balloons animation */}
      <AnimatePresence>
        {showBalloons && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="balloon absolute"
                style={{
                  left: `${20 + i * 10}%`,
                  bottom: '-50px',
                  backgroundColor: ['#E63946', '#F4D35E', '#90BE6D', '#B5651D'][i % 4]
                }}
                initial={{ y: 0, opacity: 0 }}
                animate={{ 
                  y: -window.innerHeight - 100,
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 4,
                  delay: i * 0.3,
                  ease: "easeOut"
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Quote */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-chewy text-pizza-red mb-4">
            A pizza is never complete without its favorite slice — that's you! 🍕❤️
          </h1>
        </motion.div>

        {/* Pizza with slices */}
        <motion.div
          className="relative mb-12"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {pizzaSlices.map((slice, index) => (
              <motion.div
                key={slice.id}
                className={`absolute pizza-slice ${
                  slicesSplit ? 'slice-split-animation' : ''
                }`}
                style={{
                  transformOrigin: 'center',
                  transform: `rotate(${index * 90}deg)`,
                  left: slicesSplit ? `${Math.random() * 200 - 100}px` : '50%',
                  top: slicesSplit ? `${Math.random() * 200 - 100}px` : '50%',
                  marginLeft: '-64px',
                  marginTop: '-64px',
                }}
                whileHover={!slicesSplit ? { scale: 1.1, rotate: 5 } : {}}
                animate={!slicesSplit ? {
                  y: [0, -10, 0],
                  rotate: [0, 2, -2, 0]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                {/* Pizza slice base */}
                <div className="w-full h-full rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pizza-yellow to-pizza-red rounded-full" />
                  
                  {/* Slice face */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl md:text-6xl">
                      {slice.expression === 'happy' && '😊'}
                      {slice.expression === 'cute' && '🥰'}
                      {slice.expression === 'goofy' && '😛'}
                      {slice.expression === 'chill' && '😎'}
                    </div>
                  </div>

                  {/* Party hat for birthday boy */}
                  {slice.hasHat && (
                    <motion.div
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 1
                      }}
                    >
                      <div className="text-2xl">🎉</div>
                    </motion.div>
                  )}

                  {/* Sparkles for party hat */}
                  {slice.hasHat && (
                    <>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="sparkle absolute"
                          style={{
                            left: `${30 + i * 20}%`,
                            top: '-20px',
                          }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Click Me button */}
        <AnimatePresence>
          {!showMemorySection && (
            <motion.button
              onClick={handlePizzaClick}
              className="bg-pizza-red hover:bg-pizza-red/90 text-white font-chewy text-3xl py-6 px-12 rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-pizza-red/50"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 30px rgba(230, 57, 70, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              Take a Slice 🍕
            </motion.button>
          )}
        </AnimatePresence>

        {/* Memory Section */}
        <AnimatePresence>
          {showMemorySection && (
            <MemorySection />
          )}
        </AnimatePresence>

        {/* Final Section */}
        <AnimatePresence>
          {showFinalSection && (
            <FinalSection onGiftClick={onGiftClick} />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MainPage;
