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
  const { data: session } = useSession();
  const pathname = usePathname();

  const isLoggedIn = session?.user ? true : false;

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/#about-holmes", label: "About" },
    { href: "/#showcase", label: "Services" },
    { href: "/#listings", label: "Listings" },
    { href: "/#charter-thailand", label: "Charter" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? "bg-white/80 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-8 md:grid md:grid-cols-2 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="">

        <Link href="/" className="flex items-center ">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={230}
            height={130}
            className="cursor-pointer object-cover"
          />
        </Link>
        </div>

        {/* ================= Desktop Menu ================= */}
        <div className="hidden md:flex space-x-8 font-medium">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

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
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
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
