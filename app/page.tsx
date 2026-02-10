'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import Memories from '@/components/Memories';
import Letter from '@/components/Letter';
import Surprise from '@/components/Surprise';
import Finale from '@/components/Finale';
import Petals from '@/components/Petals';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
    // Smooth scroll to next section after state update
    setTimeout(() => {
      const memoriesSection = document.getElementById('memories');
      if (memoriesSection) {
        memoriesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      <Petals />
      <MusicPlayer />

      <div className="relative z-10">
        <Hero onStart={handleStart} />

        <AnimatePresence>
          {started && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div id="memories">
                <Memories />
              </div>
              <Letter />
              <Surprise />
              <Finale />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
