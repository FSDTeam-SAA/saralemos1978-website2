"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { data: session } = useSession();
  const pathname = usePathname();

  const isLoggedIn = session?.user ? true : false;

  const menuItems = [
    { href: "/#home", label: "Home", id: "home" },
    { href: "/#about-holmes", label: "About", id: "about-holmes" },
    { href: "/#showcase", label: "Services", id: "showcase" },
    { href: "/#listings", label: "Listings", id: "listings" },
    { href: "/#charter-thailand", label: "Charter", id: "charter-thailand" },
    { href: "/#contact", label: "Contact", id: "contact" },
  ];

  // Detect scroll position for background and active section fallback
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // If at the very top, always set home as active
      if (window.scrollY < 100 && pathname === "/") {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Intersection Observer for active section
  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = menuItems
      .filter((item) => item.id)
      .map((item) => item.id);
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Adjusted rootMargin to better detect when a section is "active" at the top
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id!);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  const getIsActive = (item: typeof menuItems[0]) => {
    // If we're on a different page, match by pathname only
    if (pathname !== "/") {
      return pathname === item.href.split('#')[0];
    }
    
    // If we're on the home page, use the observed section
    if (activeSection) {
      return item.id === activeSection;
    }
    
    // Default to home if no section is detected yet and we're on /
    return item.id === "home";
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 shadow-md backdrop-blur-lg   ${
        scrolled ? "bg-white/80 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={180}
              height={100}
              className="cursor-pointer object-cover w-[150px] sm:w-[180px] md:w-[200px] lg:w-[230px] h-auto"
            />
          </Link>
        </div>

        {/* ================= Desktop Menu ================= */}
        <div className="hidden md:flex space-x-4 lg:space-x-8 font-medium">
          {menuItems.map((item) => {
            const isActive = getIsActive(item);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-1 transition-all duration-300 ${
                  isActive
                    ? "text-[#904ED4] font-semibold"
                    : "text-[#904ED499] hover:text-[#904ED4]"
                }`}
              >
                {item.label}

                {/* Active underline */}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#904ED4] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

     

        {/* ================= Mobile Menu ================= */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                className="bg-white text-[#904ED4]"
                aria-label="Toggle menu"
              >
                {open ? <X size={26} /> : <Menu size={26} />}
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px]">
              <nav className="flex flex-col mt-10 space-y-6">
                {menuItems.map((item) => {
                  const isActive = getIsActive(item);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        setOpen(false);
                        // If clicking Home while already on Home, scroll to top
                        if ((item.href === "/" || item.href === "/#home") && pathname === "/") {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      className={`relative px-4 py-2 text-lg transition-all duration-300 ${
                        isActive
                          ? "text-[#904ED4] font-semibold"
                          : "text-[#904ED499] hover:text-[#904ED4]"
                      }`}
                    >
                      {item.label}

                      {/* Active underline (mobile) */}
                      {isActive && (
                        <span className="absolute left-4 -bottom-1 h-[2px] w-10 bg-[#904ED4] rounded-full" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
