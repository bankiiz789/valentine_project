'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, X } from 'lucide-react';
import BouquetSvg from './BouquetSvg';

export default function Surprise() {
    const [showModal, setShowModal] = useState(false);
    const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleYes = () => {
        // Fire confetti
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 50 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);

        setShowModal(true);
    };

    const moveNoButton = () => {
        // Calculate random position within constraints
        // Simple random move for now, could be bounded by container
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;
        setNoBtnPosition({ x, y });
    };

    return (
        <section ref={containerRef} className="py-20 px-4 flex flex-col items-center justify-center min-h-[50vh] relative overflow-hidden">

            <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-playfair font-bold text-valentine-red mb-12 text-center"
            >
                Will you be my Valentine? 🌹
            </motion.h2>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-center relative z-10">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleYes}
                    className="px-10 py-5 bg-gradient-to-r from-valentine-red to-valentine-pink text-white text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
                >
                    Yes, I will! 💖
                </motion.button>

                <motion.button
                    animate={noBtnPosition}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onMouseEnter={moveNoButton} /* Desktop hover */
                    onClick={moveNoButton} /* Mobile tap fallback to move instead of click/or just move */
                    /* Improve mobile: onTouchStart might be better? But onClick suffices to dodge taps if fast enough, or just move on touch */
                    className="px-10 py-5 bg-white text-gray-500 text-xl font-bold rounded-full shadow-md hover:shadow-lg border border-gray-200 transition-colors"
                >
                    No...
                </motion.button>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.5, opacity: 0, y: 50 }}
                            transition={{ type: "spring", damping: 15 }}
                            className="bg-white rounded-3xl p-8 max-w-md w-full text-center relative shadow-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X />
                            </button>

                            <div className="flex justify-center mb-6">
                                <BouquetSvg className="w-48 h-48 drop-shadow-lg" />
                            </div>

                            <h3 className="text-3xl font-playfair font-bold text-valentine-red mb-4">
                                Congratulations! you got this 💐
                            </h3>
                            <p className="font-poppins text-gray-600 mb-8">
                                คุณได้รับดอกไม่อิเล็กทรอนิกส์ 1 ชิ้น จาก ด.ช. ศักรินทร์ <br />
                                Happy valentine's day นะคะ พี่คิดถึงหนูทู้กวันนนนน ขอให้วันนี้เป็นวันที่ดีนะคะ
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowModal(false)}
                                className="w-full py-3 bg-valentine-light text-valentine-red font-bold rounded-xl hover:bg-red-100 transition-colors"
                            >
                                Close (Love you!)
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}
