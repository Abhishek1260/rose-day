"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


const cards = [
    { src: "/photos/g1.jpg", top: "0%", left: "10%", rotate: -6 },
    { src: "/photos/g2.jpg", top: "5%", left: "40%", rotate: 4 },
    { src: "/photos/g3.jpg", top: "10%", left: "70%", rotate: -3 },

    { src: "/photos/g4.jpg", top: "30%", left: "5%", rotate: 5 },
    { src: "/photos/g5.jpg", top: "35%", left: "35%", rotate: -4 },
    { src: "/photos/g6.jpg", top: "30%", left: "65%", rotate: 6 },

    { src: "/photos/g7.jpg", top: "60%", left: "15%", rotate: -5 },
    { src: "/photos/g8.jpg", top: "65%", left: "45%", rotate: 3 },
    { src: "/photos/g9.jpg", top: "60%", left: "75%", rotate: -2 },
];


export default function Gallery() {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);


    return (
        <section className="relative py-40">
            <h2 className="text-center text-5xl font-serif text-rose-600 mb-24">
                Little Pieces of Us 🤍
            </h2>

            {/* Collage Container — OWNS HEIGHT */}
            <div className="relative mx-auto w-full max-w-6xl" style={{ height: "1200px" }}>
                {cards.map((photo, i) => (
                    <motion.div
                        key={i}
                        className="absolute cursor-pointer rounded-xl overflow-hidden"
                        style={{
                            top: photo.top,
                            left: photo.left,
                            rotate: photo.rotate,
                            width: "320px",
                            height: "320px",
                        }}
                        whileHover={{
                            scale: 1.15,
                            rotate: 0,
                            zIndex: 50,
                        }}
                        transition={{ duration: 0.25 }}
                        onClick={() => setActiveIndex(i)}
                    >
                        {/* FIXED-SIZE WHITE FRAME */}
                        <div
                            className="
                        w-full
                        h-full
                        bg-white
                        shadow-[0_25px_50px_rgba(0,0,0,0.35)]
                        flex
                        items-center
                        justify-center
                        "
                        >
                            {/* CONTENT ALWAYS FILLS FRAME */}
                            <div className="w-full h-full flex items-center justify-center text-gray-300 overflow-hidden">
                                <img src={photo.src} />
                            </div>
                        </div>
                    </motion.div>

                ))}
            </div>

            <AnimatePresence>
                {activeIndex !== null && (
                    <motion.div
                        className="
                            fixed inset-0 z-[100]
                            bg-black/70
                            flex items-center justify-center
                            "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveIndex(null)}
                    >
                        {/* STOP PROPAGATION */}
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="
                                bg-white
                                rounded-3xl
                                shadow-[0_40px_80px_rgba(0,0,0,0.5)]
                                flex items-center justify-center
                                relative
                            "
                            style={
                                {
                                    width: "420px",
                                    height: '420px'
                                }
                            }
                        >
                            {cards[activeIndex].src ? (
                                <img
                                    src={cards[activeIndex].src}
                                    alt=""
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            ) : (
                                <div className="text-3xl text-gray-300">🤍</div>
                            )}

                            {/* CLOSE HINT */}
                            <span className="absolute bottom-4 text-sm text-gray-400">
                                click anywhere to close
                            </span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
