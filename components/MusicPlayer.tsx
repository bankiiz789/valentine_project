'use client';

import { useState, useRef, useEffect } from 'react';
import { Music, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showControl, setShowControl] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Attempt to autoplay on mount (often blocked by browsers until interaction)
        // We can try, or just wait for user interaction.
        // Better UX: Show a small toast or just let user discover the music button.

        // Auto-hide controls after a while
        const timer = setTimeout(() => {
            // setShowControl(false); 
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
            <AnimatePresence>
                {!isPlaying && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="mb-2 mr-2 bg-white px-4 py-2 rounded-xl shadow-lg border border-pink-100 relative group"
                    >
                        <p className="text-sm font-poppins text-valentine-red font-medium whitespace-nowrap">
                            เปิดเพลงตรงนี้นะงับบ 🎵
                        </p>
                        {/* Speech bubble arrow */}
                        <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45 border-r border-b border-pink-100"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            <audio ref={audioRef} loop src="/music/song.mp3" />

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-xl border-2 border-pink-200 text-valentine-red flex items-center justify-center transition-all hover:border-valentine-red hover:shadow-2xl"
                title={isPlaying ? "Pause Music" : "Play Music"}
            >
                {isPlaying ? (
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                        <Music size={24} />
                    </motion.div>
                ) : (
                    <Music size={24} className="opacity-50" />
                )}
            </motion.button>
        </div>
    );
}
