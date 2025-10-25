import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import EntryPage from './components/EntryPage';
import MainPage from './components/MainPage';
import MemorySection from './components/MemorySection';
import FinalSection from './components/FinalSection';

function App() {
  const [currentPage, setCurrentPage] = useState('entry');
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMemorySection, setShowMemorySection] = useState(false);
  const [showFinalSection, setShowFinalSection] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSecretKeySubmit = (isValid) => {
    if (isValid) {
      // Play oven ding sound (you can add actual sound file)
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBS13yO/eizEIHWq+8+OWT');
      audio.play().catch(() => {}); // Ignore errors if audio fails
      
      setTimeout(() => {
        setCurrentPage('main');
      }, 1000);
    }
  };

  const handlePizzaClick = () => {
    // Play pizza sizzle sound
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBS13yO/eizEIHWq+8+OWT');
    audio.play().catch(() => {});
    
    setShowConfetti(true);
    
    setTimeout(() => {
      setShowMemorySection(true);
      setShowConfetti(false);
    }, 3000);
  };

  const handleGiftClick = () => {
    setShowFinalSection(true);
  };

  return (
    <div className="min-h-screen bg-pizza-cream overflow-x-hidden">
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      
      <AnimatePresence mode="wait">
        {currentPage === 'entry' && (
          <EntryPage key="entry" onSecretKeySubmit={handleSecretKeySubmit} />
        )}
        
        {currentPage === 'main' && (
          <MainPage 
            key="main" 
            onPizzaClick={handlePizzaClick}
            showMemorySection={showMemorySection}
            showFinalSection={showFinalSection}
            onGiftClick={handleGiftClick}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;