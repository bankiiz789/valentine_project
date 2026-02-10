'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Letter() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const shouldReduceMotion = useReducedMotion();
    const [displayedText, setDisplayedText] = useState("");
    const fullText = "Happy Valentine's Day, Tawan 💖 I made this for you. Hope you like it.";

    // Typewriter effect
    useEffect(() => {
        if (isInView) {
            if (shouldReduceMotion) {
                setDisplayedText(fullText);
            } else {
                let index = 0;
                const interval = setInterval(() => {
                    if (index <= fullText.length) {
                        setDisplayedText(fullText.slice(0, index));
                        index++;
                    } else {
                        clearInterval(interval);
                    }
                }, 50); // Speed of typing

                return () => clearInterval(interval);
            }
        }
    }, [isInView, shouldReduceMotion]);

    return (
        <section className="py-20 px-4 flex justify-center">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white max-w-2xl w-full p-8 md:p-12 rounded-sm shadow-2xl rotate-1 relative overflow-hidden"
                style={{
                    backgroundImage: 'linear-gradient(#f0f0f0 .1em, transparent .1em)',
                    backgroundSize: '100% 2em'
                }}
            >
                {/* Paper texture overlay */}
                <div className="absolute inset-0 bg-orange-50 opacity-20 pointer-events-none mix-blend-multiply"></div>

                <div className="relative z-10 space-y-6">
                    <p className="font-poppins text-lg md:text-xl leading-8 text-gray-800 font-medium">
                        {/* Use displayedText for typewriter, but if user has prefers-reduced-motion we should just show full text. 
                 Since we can't easily detect that in JS without more hooks, we'll rely on the effect. 
                 Ideally we'd check window.matchMedia('(prefers-reduced-motion: reduce)').
             */}
                        <span className="sr-only">{fullText}</span>
                        <span aria-hidden="true">{displayedText}</span>
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-[2px] h-5 bg-black ml-1 align-middle"
                        >
                        </motion.span>
                    </p>

                    <p className="font-poppins text-lg md:text-xl leading-8 text-gray-800">
                        จริงๆทุกวันก็เป็นวันแห่งความรักนะ คึคึ
                        <br />
                        ดีใจที่มีเธออยู่ข้างๆ นะครับ <br />
                        ปล. ถ้าถ่ายคลิปตอนเปิด ข้ามตรงนี้ไปนะ พี่เขิน 555
                    </p>

                    <div className="pt-8 text-right">
                        <p className="font-playfair text-2xl md:text-3xl italic text-valentine-red">— Bank</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
