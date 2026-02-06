"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const petals = Array.from({ length: 12 });

export default function Petals() {
    const [mounted, setMounted] = useState(false);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setMounted(true);
        const updateWidth = () => setWidth(window.innerWidth);
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const items = useMemo(
        () =>
            petals.map(() => ({
                x: Math.random() * (width || 0),
                duration: 12 + Math.random() * 8,
                delay: Math.random() * 5,
            })),
        [width]
    );

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-10">
            {items.map((item, i) => (
                <motion.div
                    key={i}
                    className="absolute text-rose-300 text-2xl"
                    initial={{
                        x: item.x,
                        y: -50,
                        opacity: 0.7,
                    }}
                    animate={{
                        y: "110vh",
                        rotate: 360,
                    }}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: "linear",
                    }}
                >
                    🌸
                </motion.div>
            ))}
        </div>
    );
}
