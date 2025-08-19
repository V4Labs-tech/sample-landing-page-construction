'use client'

import React from 'react'
import { AnimatedTestimonials } from './ui/animated-testimonials'

function Clients() {
    return (
        <>
            <div className='max-w-7xl mx-auto px-4 py-5'>
                <h2 className='text-3xl font-bold text-center mb-8'>What Our Clients Say</h2>
                <p className='text-center text-gray-600 mb-8'>Discover how our solutions have transformed businesses across various industries.</p>
                <AnimatedTestimonials testimonials={testimonials} />;
            </div>
        </>
    )
}

export default Clients

const testimonials = [
    {
        quote:
            "SR Engineering Works consistently delivers components with the tight tolerances we require. Their precision and reliability are unmatched.",
        name: "Anil Kumar",
        designation: "Lead Engineer at MTAR Technologies",
        src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Their team is highly professional and their CNC machining capabilities have been crucial for our production line. Quality is always top-notch.",
        name: "Priya Sharma",
        designation: "Procurement Head at GR Power Switchgear Ltd",
        src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "We rely on SR Engineering for high-volume turning of critical electronic components. Their consistency and timely delivery are commendable.",
        name: "Ravi Shankar",
        designation: "Operations Manager at Bhaskari Electronics PVT LTD",
        src: "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "The quality of their surface grinding and finishing is excellent. They are a trusted partner for our aerospace manufacturing needs.",
        name: "Sunita Reddy",
        designation: "Quality Assurance Lead at Ramesh Aerospace",
        src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Their flexibility with materials and end-to-end manufacturing solutions has made them an invaluable part of our supply chain.",
        name: "Vikram Singh",
        designation: "Supply Chain Director at Apollo Micro Systems LTD",
        src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];


