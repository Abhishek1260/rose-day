"use client";
import { motion } from "framer-motion";

export default function RoseIntro() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-6">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-[var(--font-playfair)] text-rose-600"
            >
                Happy Rose Day 🌹
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-4 text-lg text-gray-600 font-[var(--font-poppins)]"
            >
                And happy 6 months of us ❤️
            </motion.p>

            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="mt-10 text-sm text-gray-400"
            >
                Scroll slowly… this is our story
            </motion.span>
        </section>
    );
}
