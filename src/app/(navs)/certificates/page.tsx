"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Building, FileText, ShieldCheck, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have a utility for class names

// Main Page Component
function CertificatesPage() {
    // Data extracted from the SR ENGG WORKS PDF
    const certificates = [
        {
            icon: <ShieldCheck className="w-10 h-10" />,
            title: "ISO 9001:2015 Certified",
            id: "Q-240328004",
            description:
                "Ensures our quality management systems meet the highest international standards, guaranteeing consistency and excellence.",
            featured: true,
        },
        {
            icon: <Building className="w-10 h-10" />,
            title: "MSME Registration",
            id: "TS09D0022414",
            description: "Registered as a Micro, Small, and Medium Enterprise, contributing to the national economy.",
        },
        {
            icon: <FileText className="w-10 h-10" />,
            title: "GST Registration",
            id: "36BYDPP8026P1ZR",
            description: "Fully compliant with the Goods and Services Tax regulations of India.",
        },
        {
            icon: <UserCheck className="w-10 h-10" />,
            title: "Labor License",
            id: "SEA/MED/ALO/KP/0581641/2023",
            description: "Adhering to all labor laws and regulations to ensure a safe and fair working environment.",
        },
    ];

    // Animation variants for Framer Motion with correct typing
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
        <div className="bg-gray-50 dark:bg-black min-h-screen">
            <div className="container mx-auto px-6 py-20">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        Our Commitment to Quality
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        We adhere to the highest industry standards, backed by official certifications and registrations that guarantee our quality and reliability.
                    </p>
                </motion.div>

                {/* All Certificates Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {certificates.map((cert) => (
                        <motion.div
                            key={cert.title}
                            className={cn(
                                "p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2",
                                cert.featured
                                    ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                                    : "bg-white dark:bg-neutral-900"
                            )}
                            variants={itemVariants}
                        >
                            <div className={cn("mb-4", cert.featured ? "text-blue-500" : "text-gray-600 dark:text-gray-300")}>
                                {cert.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{cert.title}</h3>
                            <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-4">{cert.id}</p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{cert.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default CertificatesPage;
