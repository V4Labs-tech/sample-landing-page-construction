"use client";

import React from "react";
import { motion, Variants } from "framer-motion"; // 1. Import Variants type
import { CheckCircle, Award, Target } from "lucide-react";
import Image from "next/image";
// 2. Removed Next.js Image component import
// import Image from "next/image"; 

// Placeholder for the main page component
function AboutPage() {
    // Extracted data from the provided PDF
    const founder = {
        name: "Purilla Suresh",
        title: "Founder & Proprietor",
        // Using a professional placeholder image
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };

    const companyInfo = {
        established: 2015,
        iso: "ISO 9001:2015 Certified",
        vision:
            "To become a trusted and innovative partner in the manufacturing sector by consistently delivering precise, reliable, and cost-effective solutions. We aim to empower businesses of all sizes through our commitment to craftsmanship, continuous improvement, and customer satisfaction.",
    };

    // 3. Explicitly type the animation variants to fix the TypeScript error
    const fadeIn: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
        },
    };

    return (
        <div className="bg-white dark:bg-black text-gray-800 dark:text-gray-200">
            {/* Header Section */}
            {/* <motion.section
                className="text-center py-20 bg-gray-50 dark:bg-neutral-900"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        About SR Engineering Works
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Your trusted partner in precision manufacturing since 2015.
                    </p>
                </div>
            </motion.section> */}

            {/* Founder Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="text-center md:text-left lg:ml-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl font-bold mb-4">Meet Our Founder</h2>
                        <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                            {founder.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">{founder.title}</p>
                        <p>
                            With a deep-rooted commitment to craftsmanship and precision,
                            Purilla Suresh established SR Engineering Works in 2015. His
                            leadership and expertise have been the driving force behind our
                            reputation for delivering reliable and cost-effective
                            manufacturing solutions.
                        </p>
                    </motion.div>
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* 4. Replaced <Image> with standard <img> tag */}
                        <Image
                            width={200}
                            height={200}
                            src={founder.image}
                            alt={`Portrait of ${founder.name}`}
                            className="rounded-full h-64 w-64 md:h-80 md:w-80 object-cover shadow-2xl"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-20 bg-gray-50 dark:bg-neutral-900">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <Target className="h-12 w-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto italic">
                            &quot;{companyInfo.vision}&quot;
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Company Info Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl font-bold mb-10">
                            Our Commitment to Excellence
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-gray-50 dark:bg-neutral-900 p-8 roundedg shadow-lg text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                <Award className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Established History</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Founded in {companyInfo.established}, we have nearly a decade of
                                    experience delivering high-quality manufacturing services.
                                </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-neutral-900 p-8 roundedg shadow-lg text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                <CheckCircle className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Quality Certified</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    We are proud to be {companyInfo.iso}, ensuring our processes
                                    meet the highest international standards for quality.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
