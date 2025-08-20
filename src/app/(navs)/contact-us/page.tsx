"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

// Main Page Component
function ContactPage() {
    // Data extracted from the SR ENGG WORKS PDF
    const contactInfo = {
        person: "Purilla Suresh",
        phone: "8978964244",
        email: "srengineeringworks1993@gmail.com",
        address: "7-8-279/3A, Gouthamnagar Ferozguda, Hyderabad, 500011",
        mapQuery: "SR+Engineering+Works,+Gouthamnagar,+Ferozguda,+Hyderabad",
    };

    const contactMethods = [
        {
            icon: <Phone className="w-8 h-8 mb-4 text-blue-500" />,
            title: "Call Us",
            detail: contactInfo.phone,
            href: `tel:${contactInfo.phone}`,
        },
        {
            icon: <Mail className="w-8 h-8 mb-4 text-blue-500" />,
            title: "Email Us",
            detail: contactInfo.email,
            href: `mailto:${contactInfo.email}`,
        },
        {
            icon: <MapPin className="w-8 h-8 mb-4 text-blue-500" />,
            title: "Visit Us",
            detail: contactInfo.address,
            href: `https://www.google.com/maps/search/?api=1&query=${contactInfo.mapQuery}`,
        },
    ];

    // Animation variants for Framer Motion
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <div className="bg-white dark:bg-black min-h-screen">
            <div className="container mx-auto px-6 py-20">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        We&apos;re here to help with your manufacturing needs. Reach out to us through any of the methods below.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Details Column */}
                    <motion.div
                        className="space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="text-center lg:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Primary Contact</h2>
                            <p className="text-gray-600 dark:text-gray-400">{contactInfo.person}</p>
                        </div>
                        {contactMethods.map((method) => (
                            <motion.a
                                key={method.title}
                                href={method.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center text-center lg:flex-row lg:text-left bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                variants={itemVariants}
                            >
                                {method.icon}
                                <div className="lg:ml-6">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{method.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 break-words">{method.detail}</p>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Map Column */}
                    <motion.div
                        className="w-full h-96 md:h-[550px] rounded-xl overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <iframe
                            title="SR Engineering Works Location"
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDzUtpCsSARGeGJAn4gk0QjcYJ0iZbAloY&q=${contactInfo.mapQuery}`} // Replace YOUR_API_KEY
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
