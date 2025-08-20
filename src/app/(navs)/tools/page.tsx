"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
// import { Wrench, Cog, Drill } from "lucide-react";
import Image from "next/image";

// Main Page Component
function ToolsPage() {
    // Data extracted from the PDF with real image URLs
    const machines = [
        {
            name: "CNC Lathe",
            image: "https://images.unsplash.com/photo-1666618090858-fbcee636bd3e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            specs: [
                { label: "Control System", value: "FANUC" },
                { label: "Max Diameter", value: "540 mm" },
                { label: "Bed Length", value: "1000 mm" },
            ],
        },
        {
            name: "CNC Milling",
            image: "https://plus.unsplash.com/premium_photo-1682144586700-0a4928381b04?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            specs: [
                { label: "Control System", value: "FANUC" },
                { label: "Travel (X/Y/Z)", value: "1000/510/510 mm" },
            ],
        },
        {
            name: "Traub Machine",
            image: "https://media.istockphoto.com/id/828103322/photo/equipment-and-machines-for-the-production-of-footwear.webp?a=1&b=1&s=612x612&w=0&k=20&c=CfBKR1hrxRtd1gPRSbyddpM8mFqlcDOGWGEINlUuF0I=",
            specs: [
                { label: "Control System", value: "CAM Control" },
                { label: "Turning Capacity", value: "1mm to 50mm" },
                { label: "Drilling Size", value: "1mm to 25mm" },
            ],
        },
        {
            name: "Surface Grinding",
            image: "https://media.istockphoto.com/id/914855976/photo/sparks-flying-while-machine-griding-and-finishing-metal.webp?a=1&b=1&s=612x612&w=0&k=20&c=wKlfCMn6JvEQ72uhC7kqJ9dKHLQ-zBZGElQp-C3AF-4=",
            specs: [
                { label: "Control System", value: "Hydraulic" },
                { label: "Max Width", value: "300 mm" },
                { label: "Max Length", value: "750 mm" },
            ],
        },
        {
            name: "Thread Rolling",
            image: "https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TWV0YWwlMjBUaHJlYWQlMjBSb2xsaW5nJTIwTWFjaGluZXxlbnwwfHwwfHx8MA%3D%3D",
            specs: [
                { label: "Process", value: "Cold-forming" },
                { label: "Benefit", value: "Enhanced Strength" },
            ],
        },
        {
            name: "Centerless Grinding",
            image: "https://media.istockphoto.com/id/1442527793/photo/two-thread-rolling-die-of-automatic-hydraulic-horizontal-thread-rolling-machine-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=fK_ofeuV3i5OOEQTHXbAvaFHxW7xlU0OO4BzKiyyZ-k=",
            specs: [
                { label: "Method", value: "High-efficiency" },
                { label: "Application", value: "Cylindrical Parts" },
            ],
        },
    ];

    // Animation variants for Framer Motion
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <div className="bg-white dark:bg-black">
            <div className="container mx-auto px-6 py-20">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        Our State-of-the-Art Machinery
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        We utilize a diverse range of high-precision equipment to meet the exacting standards of modern manufacturing.
                    </p>
                </motion.div>

                {/* Machinery Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {machines.map((machine) => (
                        <motion.div
                            key={machine.name}
                            className="bg-gray-50 dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden group"
                            variants={itemVariants}
                        >
                            <div className="relative h-64">
                                <Image
                                    width={800}
                                    height={600}
                                    src={machine.image}
                                    alt={machine.name}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{machine.name}</h3>
                                <ul className="space-y-2">
                                    {machine.specs.map(spec => (
                                        <li key={spec.label} className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                                            <span className="font-medium text-gray-700 dark:text-gray-200">{spec.label}:</span>
                                            <span>{spec.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default ToolsPage;
