'use client'

import React from 'react'
import { Gallery4, Gallery4Props } from './gallery4';

function Products() {
  return (
    <>
      <Gallery4 {...demoData} />;

    </>
  )
}

export default Products


const demoData: Gallery4Props = {
  title: "Our Product Capabilities",
  description:
    "We manufacture a wide range of custom components, engineered to the highest standards of precision and quality for various industries.",
  items: [
    {
      id: "aerospace-flanges",
      title: "Custom Aerospace Flanges",
      description:
        "High-tolerance flanges and fittings manufactured for the aerospace and defense sectors, ensuring maximum reliability and performance.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1682918645008-60a47f657bf9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "electronic-enclosures",
      title: "Precision Electronic Enclosures",
      description:
        "Custom-milled aluminum and metal housings designed to protect sensitive electronic components in any environment.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1601189571635-6235edeb6924?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "switchgear-components",
      title: "Power Switchgear Components",
      description:
        "Durable, high-conductivity parts for the power sector, including custom busbars, connectors, and internal mechanisms.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "custom-shafts",
      title: "Machined Shafts & Axles",
      description:
        "Centerless ground and CNC-turned shafts with precise diameters and smooth finishes for industrial machinery.",
      href: "#",
      image:
        "https://plus.unsplash.com/premium_photo-1675371421686-d092d62b75d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "threaded-fasteners",
      title: "Custom Threaded Fasteners",
      description:
        "High-strength bolts, screws, and custom fasteners produced through precision thread rolling for superior durability.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1573052775154-df4d35b5b5ad?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "iso-certification",
      title: "ISO 9001:2015 Certified Quality",
      description:
        "Our commitment to quality is backed by our ISO 9001:2015 certification, ensuring international standards in every product we deliver.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};




