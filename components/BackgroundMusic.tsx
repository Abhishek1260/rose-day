"use client";
import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    const tryPlay = async () => {
        const audio = audioRef.current;
        if (!audio) return;
        try {
            await audio.play();
            setIsPlaying(true);
            setHasInteracted(true);
        } catch {
            // Autoplay restrictions may block until user interaction.
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = 0.15;
        }
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (!hasInteracted) {
                tryPlay();
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [hasInteracted]);

    return (
        <>
            <button
                type="button"
                onClick={tryPlay}
                style={{
                    position: "fixed",
                    bottom: "6px",
                    left: "6px",
                    zIndex: 20,
                    display: "flex",
                    height: "42px",
                    width: "42px",
                    margin: "16px"
                }}
                className="fixed bottom-6 left-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white p-2 text-xl text-black shadow-xl transition-transform hover:scale-105"
                aria-pressed={isPlaying}
                aria-label={isPlaying ? "Music playing" : "Play music"}
            >
                {isPlaying ? "🎶" : "🔊"}
            </button>
            <audio ref={audioRef} loop>
                <source src="/music/romatic.mp3" type="audio/mpeg" />
            </audio>
        </>
    );
}
