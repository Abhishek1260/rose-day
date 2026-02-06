"use client";
import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = 0.15;
            audio.play().catch(() => { });
        }
    }, []);

    return (
        <audio ref={audioRef} loop>
            <source src="/music/romantic.mp3" type="audio/mpeg" />
        </audio>
    );
}
