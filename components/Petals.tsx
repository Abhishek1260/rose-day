"use client";
import { motion } from "framer-motion";

const petals = Array.from({ length: 12 });

export default function Petals() {
    return (
        <div className="fixed inset-0 pointer-events-none z-10">
            {petals.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-rose-300 text-2xl"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: -50,
                        opacity: 0.7,
                    }}
                    animate={{
                        y: "110vh",
                        rotate: 360,
                    }}
                    transition={{
                        duration: 12 + Math.random() * 8,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear",
                    }}
                >
                    🌸
                </motion.div>
            ))}
        </div>
    );
}
