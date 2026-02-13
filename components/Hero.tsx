'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Hero({ onStart }: { onStart: () => void }) {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-6 overflow-hidden">

            {/* Background Floating Hearts (Subtle) */}
            <motion.div
                className="absolute top-20 left-[10%] opacity-20 text-valentine-pink"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <Heart size={40} fill="currentColor" />
            </motion.div>
            <motion.div
                className="absolute bottom-40 right-[15%] opacity-20 text-valentine-red"
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <Heart size={60} fill="currentColor" />
            </motion.div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="z-10 bg-white/30 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-xl"
            >
                <motion.h1
                    className="font-playfair text-5xl md:text-7xl font-bold text-valentine-red mb-4 drop-shadow-sm"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                >
                    Happy Valentine's<br />Day, Tawan 💖
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex flex-col items-center gap-2 mt-4"
                >
                    <span className="bg-white/60 px-4 py-1 rounded-full text-sm font-semibold text-valentine-pink tracking-wide">
                        14 Feb 2026
                    </span>
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onStart}
                    className="mt-10 px-8 py-4 bg-gradient-to-r from-valentine-red to-valentine-pink text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
                >
                    Open my heart <Heart size={20} fill="white" />
                </motion.button>
            </motion.div>

            {/* Pointing Image */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8, type: "spring" }}
                className="absolute bottom-0 md:left-1/2 md:-translate-x-1/2 left-20 z-100 pointer-events-none"
            >
                <div className="relative w-35 h-35 md:w-60 md:h-60">
                    <img
                        src="/images/my_point.PNG"
                        alt="Me pointing up"
                        className="object-contain w-full h-full drop-shadow-2xl"
                    />
                </div>
            </motion.div>
        </section>
    );
}
