'use client';

import { motion } from 'framer-motion';

export default function Finale() {
    return (
        <footer className="py-20 px-4 text-center relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative z-10"
            >
                <h2 className="text-3xl md:text-5xl font-playfair font-bold text-valentine-red mb-8">
                    I choose you, everyday.
                </h2>

                <p className="text-gray-500 font-poppins text-sm md:text-base mt-20">
                    Made with love by Bank 💗
                </p>
                <p className="text-gray-400 text-xs mt-2">
                    © 2026 Valentine's Day Project
                </p>
            </motion.div>

            {/* Footer background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-valentine-pink/20 blur-[100px] rounded-full pointer-events-none" />
        </footer>
    );
}
