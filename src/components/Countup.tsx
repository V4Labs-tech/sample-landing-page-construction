"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

// A custom NumberTicker component that animates the count-up effect
const NumberTicker = ({
    value,
    duration = 2000,
    className,
}: {
    value: number;
    duration?: number;
    className?: string;
}) => {
    const [count, setCount] = useState(0);
    const ref = React.useRef<HTMLSpanElement>(null);
    // FIX: Adjusted the margin to be more reliable on mobile devices.
    const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number | undefined;
        const animate = (timestamp: number) => {
            if (startTime === undefined) {
                startTime = timestamp;
            }
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * value));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [value, duration, isInView]);

    return (
        <span ref={ref} className={className}>
            {count.toLocaleString()}
        </span>
    );
};

function Countup() {
    // Data derived from the provided SR ENGG WORKS PDF
    const stats = [
        {
            // Established in 2015, so 2024 - 2015 = 9+ years
            value: 9,
            suffix: "+",
            title: "Years of Experience",
        },
        {
            // 80 Lakhs annual turnover
            value: 80,
            suffix: "L",
            title: "Annual Turnover",
        },
        {
            // 5 clients were listed in the "Valued Clients" section
            value: 5,
            suffix: "+",
            title: "Valued Clients",
        },
        {
            // 7 services were listed in the "Core Services" section
            value: 7,
            suffix: "+",
            title: "Core Services",
        },
    ];

    return (
        <section className="bg-gray-100 dark:bg-neutral-900 py-20">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                        Our Journey in Numbers
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Highlighting our commitment to precision, quality, and growth.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.title}
                            className="text-center bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                                <NumberTicker value={stat.value} />
                                {stat.suffix}
                            </div>
                            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
                                {stat.title}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Countup;
