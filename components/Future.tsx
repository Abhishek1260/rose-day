"use client";

import { motion } from "framer-motion";

export default function FinalScreen() {
    return (
        <section className="relative h-screen flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="text-center"
            >
                {/* Main Line */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1.2 }}
                    className="
            text-5xl
            font-serif
            text-rose-700
            mb-8
          "
                >
                    It’s always been you.
                </motion.h1>

                {/* Subtle Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="mx-auto w-24 h-[2px] bg-rose-300 mb-10 origin-left"
                />

                {/* Supporting Line */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 1 }}
                    className="
            text-lg
            text-gray-600
            font-light
          "
                >
                    Six months down.
                    A lifetime to go.
                </motion.p>
            </motion.div>
        </section>
    );
}
