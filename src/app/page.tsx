import Clients from "@/components/Clients";
import Countup from "@/components/Countup";
import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";
import WhatWeOffer from "@/components/WhatWeOffer";

export default function Home() {
  return (
    <>
    <HeroSection />
    <Countup />
    <WhatWeOffer />
    <Products />
    <Clients />
    </>
  );
}