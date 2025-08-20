"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Reusable component for team members for cleaner code
interface TeamMember {
    name: string;
    title: string;
    image: string;
}

const TeamMemberCard = ({ member }:{member:TeamMember}) => {
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="text-center group"
            variants={itemVariants}
        >
            <div className="relative inline-block">
                <Image
                    width={160}
                    height={160}
                    // <-- FIX: Requesting a much smaller, pre-cropped image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    className="w-40 h-40 rounded-full object-cover mx-auto shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-800 dark:text-white">{member.name}</h3>
            <p className="text-gray-500 dark:text-gray-400">{member.title}</p>
        </motion.div>
    );
};


// Main Page Component
function TeamPage() {
    const founder = {
        name: "Purilla Suresh",
        title: "Founder & Proprietor",
        // <-- FIX: Image URL is optimized. Instead of w=3387, we ask for a 400x400 cropped image.
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&h=400&auto=format&fit=crop",
        bio: "With a deep-rooted commitment to craftsmanship and precision, Purilla Suresh established SR Engineering Works in 2015. His leadership and expertise have been the driving force behind our reputation for delivering reliable and cost-effective manufacturing solutions.",
    };

    const teamMembers = [
        {
            name: "Ravi Kumar",
            title: "Operations Manager",
             // <-- FIX: Optimized image URL
            image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&h=400&auto=format&fit=crop",
        },
        {
            name: "Anjali Mehta",
            title: "Quality Assurance Lead",
             // <-- FIX: Optimized image URL
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=400&auto=format&fit=crop",
        },
        {
            name: "Sandeep Singh",
            title: "Lead CNC Machinist",
             // <-- FIX: Optimized image URL
            image: "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?q=80&w=400&h=400&auto=format&fit=crop",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
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
                        The Leadership Driving Our Precision
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Our team’s expertise and dedication are the cornerstones of our success.
                    </p>
                </motion.div>

                {/* Founder Section */}
                <motion.div
                    className="flex flex-col md:flex-row items-center bg-gray-50 dark:bg-neutral-900 rounded-xl shadow-lg p-8 md:p-12 mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={itemVariants}
                >
                    <Image
                        width={200}
                        height={200}
                        src={founder.image}
                        alt={`Portrait of ${founder.name}`}
                        className="w-48 h-48 rounded-full object-cover shadow-md mb-6 md:mb-0 md:mr-10 flex-shrink-0"
                        // <-- FIX: Prioritize this image as it's likely the Largest Contentful Paint (LCP) element
                        priority 
                    />
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{founder.name}</h2>
                        <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">{founder.title}</p>
                        <p className="text-gray-600 dark:text-gray-300">{founder.bio}</p>
                    </div>
                </motion.div>

                {/* Core Team Section */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* <-- FIX: Using the reusable card component */}
                    {teamMembers.map((member) => (
                        <TeamMemberCard key={member.name} member={member} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default TeamPage;