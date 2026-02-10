'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const photos = [
    {
        src: "/images/photo1.jpg",
        rotate: -2,
        caption: "Us 💖"
    },
    {
        src: "/images/photo2.jpg",
        rotate: 1,
        caption: "ไว้ไปด้วยกันอีกนะคั้บ"
    },
    {
        src: "/images/photo3.jpg",
        rotate: -1,
        caption: "ดูหนังๆๆๆๆๆๆ"
    },
    {
        src: "/images/photo4.jpg",
        rotate: 2,
        caption: "first time date"
    },
    {
        src: "/images/photo5.jpg",
        rotate: -3,
        caption: "น่ารักมั้ยแล"
    },
    {
        src: "/images/photo6.jpg",
        rotate: 3,
        caption: "Love you 3000"
    },
    {
        src: "/images/photo7.jpg",
        rotate: 2,
        caption: ""
    },
    {
        src: "/images/photo8.jpg",
        rotate: 1,
        caption: ""
    },
    {
        src: "/images/photo9.jpg",
        rotate: -3,
        caption: ""
    },
    {
        src: "/images/photo10.jpg",
        rotate: 2,
        caption: ""
    },
    {
        src: "/images/photo11.jpg",
        rotate: -1,
        caption: ""
    },
    {
        src: "/images/photo12.jpg",
        rotate: -2,
        caption: ""
    },
    {
        src: "/images/photo13.jpg",
        rotate: 1,
        caption: ""
    },

];

export default function Memories() {
    return (
        <section className="py-20 px-4 max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-playfair font-bold text-center text-valentine-red mb-16"
            >
                Our Sweet Memories
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4">
                {photos.map((photo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: photo.rotate }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 10, transition: { duration: 0.2 } }}
                        className="relative group cursor-pointer"
                    >
                        <div className="bg-white p-3 pb-8 shadow-lg rounded-sm transform transition-transform hover:shadow-2xl">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-gray-100">
                                <Image
                                    src={photo.src}
                                    alt={photo.caption}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <p className="font-handwriting text-center mt-4 text-gray-600 font-medium font-playfair italic text-lg">
                                {photo.caption}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
