import React from "react";
// Removed unused social media icons
// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image"; // Import the Next.js Image component

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

// Updated sections with data from the PDF
const defaultSections = [
  {
    title: "Core Services",
    links: [
      { name: "CNC Lathe Machining", href: "#" },
      { name: "Milling", href: "#" },
      { name: "Traub Machine Operations", href: "#" },
      { name: "Drilling", href: "#" },
      { name: "Surface Grinding", href: "#" },
      { name: "Centerless Grinding", href: "#" },
      { name: "Thread Rolling", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Our Clients", href: "#" },
      { name: "Certifications", href: "#" },
    ],
  },
  {
    title: "Contact Info",
    links: [
      { name: "srengineeringworks1993@gmail.com", href: "mailto:srengineeringworks1993@gmail.com" },
      { name: "8978964244", href: "tel:8978964244" },
      { name: "Ferozguda, Hyderabad", href: "#" },
    ],
  },
];

// Explicitly type the empty array to resolve TypeScript errors
const defaultSocialLinks: Footer7Props["socialLinks"] = [];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export const Footer7 = ({
  // Updated logo information
  logo = {
    url: "#",
    src: "https://placehold.co/40x40/000000/FFFFFF.png?text=SR", // Simple placeholder logo
    alt: "SR ENGG WORKS Logo",
    title: "SR ENGG WORKS",
  },
  sections = defaultSections,
  // Updated description from the company's vision
  description = "Our vision is to become a trusted and innovative partner in the manufacturing sector by consistently delivering precise, reliable, and cost-effective solutions.",
  socialLinks = defaultSocialLinks,
  // Updated copyright information
  copyright = `© ${new Date().getFullYear()} SR ENGG WORKS. All rights reserved.`,
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-8">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-start items-start gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <a href={logo.url}>
                {/* Replaced <img> with next/image <Image> */}
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </a>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">{logo.title}</h2>
            </div>
            <p className="max-w-md text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
            <ul className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-blue-500 transition-colors">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-8 md:grid-cols-3 lg:gap-12">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-semibold text-gray-800 dark:text-white">{section.title}</h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-blue-500 transition-colors"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-gray-200 dark:border-neutral-800 pt-8 text-sm font-medium text-gray-500 dark:text-gray-400 md:flex-row md:items-center">
          <p className="order-2 md:order-1">{copyright}</p>
          <ul className="order-1 flex items-center gap-4 md:order-2">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-blue-500 transition-colors">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
