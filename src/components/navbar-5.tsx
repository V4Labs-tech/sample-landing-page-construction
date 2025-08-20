"use client";

import { MenuIcon } from "lucide-react";
import { useState } from "react";

// Assuming these paths are correct for your project structure
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
// Removed 'next/link' to use standard <a> tags

export const Navbar5 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    {
      title: "CNC LATHE",
      description: "Precision machining with our CNC lathe",
      href: "/tools",
    },
    {
      title: "TRAUB",
      description: "Advanced machining with our TRAUB machine",
      href: "/tools",
    },
    {
      title: "CNC MILLING",
      description: "High-precision CNC milling services",
      href: "/tools",
    },
    {
      title: "SURFACE GRINDING",
      description: "Precision surface grinding for smooth finishes",
      href: "/tools",

    },
    {
      title: "Thread Rolling",
      description: "Efficient thread rolling for strong threads",
      href: "/tools",

    },
    {
      title: "Centreless Grinding",
      description: "Precision centreless grinding for cylindrical parts",
      href: "/tools",
    },
  ];

  return (
    <section className="sticky top-0 z-50 w-full shadow-lg bg-white ">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between p-4">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tighter">
              SR ENGG WORKS
            </h1>
          </Link>

          <div className="hidden lg:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {/* FIX: Reduced the width of the dropdown for md and lg screens */}
                    <div className="grid w-[calc(100vw-4rem)] md:w-[450px] lg:w-[400px] grid-cols-2 p-3">
                      {features.map((feature) => (
                        <NavigationMenuLink asChild key={feature.title}>
                          <Link
                            href={feature.href}
                            className="rounded-md p-3 transition-colors hover:bg-muted/70"
                          >
                            <div>
                              {/* <Image src={feature.img} width={50} height={50} alt="image"/> */}
                              <p className="mb-1 font-semibold text-foreground">
                                {feature.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {feature.description}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about-us" className={navigationMenuTriggerStyle()}>
                    About Us
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="team" className={navigationMenuTriggerStyle()}>
                    Team
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/certificates" className={navigationMenuTriggerStyle()}>
                    Certificates
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href={'/contact-us'}> <Button>Contact Us</Button></Link>
          </div>

          {/* == Mobile Navigation (Hamburger Menu) == */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <h1 className="text-2xl font-semibold tracking-tighter">
                      SR ENGG WORKS
                    </h1>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <Accordion type="single" collapsible className="mt-4 mb-2">
                  <AccordionItem value="features" className="border-none">
                    <AccordionTrigger className="text-base hover:no-underline">
                      Tools
                    </AccordionTrigger>
                    <AccordionContent className="">
                      <div className="grid md:grid-cols-2">
                        {features.map((feature) => (
                          <Link
                            href={feature.href}
                            key={feature.title}
                            className="rounded-md p-3 transition-colors hover:bg-muted/70"
                            onClick={() => setIsOpen(false)}
                          >
                            <div>
                              <p className="mb-1 font-semibold text-foreground">
                                {feature.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {feature.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="flex flex-col gap-6 text-base font-medium">
                  <Link href="/about-us" onClick={() => setIsOpen(false)}>
                    About Us
                  </Link>
                  <Link href="/team" onClick={() => setIsOpen(false)}>
                    Team
                  </Link>
                  <Link href="/certificates" onClick={() => setIsOpen(false)}>
                    Certificates
                  </Link>
                </div>

                <div className="mt-6 flex flex-col gap-4">
                  <Link href={'/contact-us'}> <Button>Contact Us</Button></Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export default Navbar5;
