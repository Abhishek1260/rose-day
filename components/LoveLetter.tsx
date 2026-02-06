"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const letterLines = [
    "Hey love,",
    "",
    "Six months ago, I didn’t know what this would become.",
    "I just knew I felt calm talking to you.",
    "",
    "Somewhere between late replies, long calls,",
    "and missing you a little too much…",
    "you became my safe place.",
    "",
    "Loving you from a distance isn’t always easy,",
    "but choosing you has never been hard.",
    "",
    "Thank you for being patient with me.",
    "Thank you for understanding me.",
    "Thank you for being you.",
    "",
    "Happy six months.",
    "And happy Rose Day 🤍",
    "",
    "Always yours,",
    "— Me",
];

export default function LoveLetter() {
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);
    const [currentLine, setCurrentLine] = useState("");
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [showImage, setShowImage] = useState(false);

    // Typing effect
    useEffect(() => {
        if (lineIndex >= letterLines.length) {
            setIsFinished(true);
            return;
        }

        const line = letterLines[lineIndex];

        const timeout = setTimeout(() => {
            if (charIndex < line.length) {
                setCurrentLine((prev) => prev + line[charIndex]);
                setCharIndex(charIndex + 1);
            } else {
                setDisplayedLines((prev) => [...prev, currentLine]);
                setCurrentLine("");
                setCharIndex(0);
                setLineIndex(lineIndex + 1);
            }
        }, line === "" ? 400 : 55);

        return () => clearTimeout(timeout);
    }, [charIndex, lineIndex, currentLine]);

    return (
        <section className="relative py-40 flex justify-center aligne-center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="flex w-1/2 justify-center align-center" style={{ width: "50%" }}>
                <motion.div
                    className="
                        rounded-3xl
                        shadow-[0_40px_80px_rgba(0,0,0,0.2)]
                        p-16
                        cursor-pointer
                        bg-white
                        relative
                    "
                    onClick={() => isFinished && setShowImage(true)}
                    style={{
                        padding: "16px"
                    }}
                >
                    <AnimatePresence mode="wait">
                        {/* TYPED LETTER */}
                        {!showImage && (
                            <motion.div
                                key="typed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div
                                    className="
                    text-2xl
                    leading-loose
                    text-gray-600
                    font-[var(--font-dancing)]
                    whitespace-pre-wrap
                  "
                                >
                                    {displayedLines.map((line, i) => (
                                        <div key={i}>{line}</div>
                                    ))}

                                    <span>{currentLine}</span>
                                    {!isFinished && (
                                        <span className="animate-pulse ml-1">|</span>
                                    )}
                                </div>

                                {isFinished && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.8 }}
                                        className="mt-10 text-center text-sm text-gray-400"
                                    >
                                        click to see the real letter
                                    </motion.div>
                                )}
                            </motion.div>
                        )}

                        {/* HANDWRITTEN IMAGE */}
                        {showImage && (
                            <motion.div
                                key="image"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                className="flex justify-center"
                            >
                                <img
                                    src="/letter/handwritten.jpg"
                                    alt="Handwritten love letter"
                                    className="
                                        rounded-2xl
                                        shadow-[0_30px_60px_rgba(0,0,0,0.25)]
                                    "
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
