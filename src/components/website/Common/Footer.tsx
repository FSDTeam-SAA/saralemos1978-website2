import React from "react";
import Link from "next/link";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="footers" className="bg-[#0E2F62] text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-5 gap-6 lg:gap-4 border-b border-gray-700 pb-12 mb-8">
          {/* Left Column - Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-orange-500">
              MARTIN HOLMES
            </h3>
            <p className="text-white/70  leading-relaxed">
              An experienced yacht broker with a background at Lee Marine and
              Northrop & Johnson, trusted for his knowledge of luxury yacht
              sales across Thailand and international markets. His hands-on
              approach, strong relationships, and deep industry insight guide
              clients from first enquiry to final deal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/#about-holmes" },
                { name: "Services", href: "/#showcase" },
                { name: "Listings", href: "/#listings" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white  transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { name: "Charter", href: "/#charter-thailand" },
                { name: "Contact", href: "/#contact" },
                // { name: "Privacy Policy", href: "/privacy-policy" },
                // { name: "Terms & Conditions", href: "/terms-conditions" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white  transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 ">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 flex-shrink-0">✉</span>
                <a
                  href="mailto:martin.holmes@northropandjohnson.com"
                  className="text-white/70 hover:text-white break-all"
                >
                  martin.holmes@northropandjohnson.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 flex-shrink-0">📞</span>
                <a
                  href="tel:+66818917057"
                  className="text-white/70 hover:text-white"
                >
                  +66 81 891 7057
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 flex-shrink-0">📍</span>
                <span className="text-white/70">
                  123 Care Street, City,
                  <br />
                  State, ZIP
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold text-white mb-1">
                Newsletter
              </h4>
              <p className="text-white/70  mb-3">
                Subscribe for updates & news
              </p>
              <form className="flex flex-wrap gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/50 text-xs focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  aria-label="Email address for subscription"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-[#0E2F62] font-semibold rounded text-xs hover:bg-gray-100 cursor-pointer transition-colors duration-300 whitespace-nowrap"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              <Link
                href="#"
                className="text-white/70 bg-[#1A4D9C] p-2 hover:text-orange-500 transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-white/70 bg-[#1A4D9C] p-2 hover:text-orange-500 transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-white/70 bg-[#1A4D9C] p-2 hover:text-orange-500 transition-colors duration-300"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-white/70 bg-[#1A4D9C] p-2 hover:text-orange-500 transition-colors duration-300"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-white/60 text-xs">
          <p>© 2025 yacht AI. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
