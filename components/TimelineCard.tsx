"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
    text: string;
    align: "left" | "right";
    image: string
};

export default function TimelineCard({ text, align, image }: Props) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            onClick={() => setFlipped(!flipped)}
            className={`w-[360px] h-[360px] cursor-pointer ${align === "left" ? "mr-auto" : "ml-auto"
                }`}
            style={{ perspective: "1200px" }}
        >
            <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="relative w-full h-full"
                whileHover={{ y: -6, scale: 1.02 }}
                initial={{ rotateZ: align === "left" ? -2 : 2 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* FRONT */}
                <div
                    className="
            absolute inset-0
            bg-white
            rounded-3xl
            overflow-hidden
            shadow-[0_30px_60px_rgba(0,0,0,0.25)]
          "
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img src={image} className="w-full h-full" style={{ objectFit: "cover" }} />
                </div>

                {/* BACK */}
                <div
                    className="
            absolute inset-0
            bg-white
            rounded-3xl
            shadow-[0_30px_60px_rgba(0,0,0,0.25)]
            flex items-center justify-center
            p-10
            text-center
            text-rose-700
            text-xl
            font-serif
          "
                    style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                    }}
                >
                    {text}
                </div>
            </motion.div>
        </div>
    );
}
