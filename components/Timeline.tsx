"use client";

import TimelineCard from "./TimelineCard";

const data = [
    "On seventh of August 2025, we first met at Leo’s artisan pizzeria. I saw you, felt that feeling again, and in that moment, I knew I wanted to be with you.",
    "I didn’t say anything that day, but you stayed in my head. The feeling didn’t fade — it only became clearer.",
    "On 31st of August 2025, we had our first long call. We talked properly for the first time, and I expressed mine feelings.",
    "On seventh of September, Even you told me that you like me.",
    "On eleventh of October, We went on our first date",
    "After We started dating, long distance struck.",
    "On 23rd December, Met after two months of long distance",
    "Every moment since then has only made one thing clearer — choosing you has never felt like a question.",
];

export default function Timeline() {
    return (
        <section className="min-h-screen py-32">
            <h2 className="text-center text-5xl font-serif text-rose-600 mb-32">
                Our Journey
            </h2>

            <div className="relative max-w-6xl mx-auto flex flex-col gap-32">
                {data.map((text, i) => (
                    <div
                        key={i}
                        className="relative w-full h-[420px] flex items-center"
                    >
                        <TimelineCard
                            text={text}
                            image={`/photos/${i + 1}.jpeg`}
                            align={i % 2 === 0 ? "left" : "right"}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
