"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Floating, transparent navbar that overlays the hero with mobile full-screen menu
export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Desktop/Tablet Navbar */}
      <nav
        className="sticky top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-3 backdrop-blur-md bg-black/60 border-b border-white"
        aria-label="Primary"
      >
        {/* Brand Logo */}
        <div className="flex items-center">
          <Image
            src="/images/transparent logo for website copy 2.png"
            alt="UW Blockchain Society logo"
            width={1200}
            height={300}
            className="h-10 md:h-12 w-auto"
            unoptimized
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-white font-medium">
          <a href="#about" className="hover:text-[rgb(183,148,244)]">About</a>
          <a href="#focus" className="hover:text-[rgb(183,148,244)]">Focus</a>
          <a href="#events" className="hover:text-[rgb(183,148,244)]">Events</a>
          <a href="#sponsors" className="hover:text-[rgb(183,148,244)]">Sponsors</a>
          <a href="#team" className="hover:text-[rgb(183,148,244)]">Team</a>

          <Link
            href="#apply"
            className="text-white px-5 py-2 rounded-full font-semibold transition-opacity hover:opacity-95"
            style={{
              backgroundImage: "linear-gradient(117.96deg, #6f58da, #5131e7)",
              boxShadow: "0 8px 24px rgba(111, 88, 218, 0.45)",
            }}
          >
            Apply
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="md:hidden text-white"
        >
          <svg width="26" height="26" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
            <path d="M4 6h18M4 13h18M4 20h18" />
          </svg>
        </button>
      </nav>

      {/* Mobile Full-Screen Overlay Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center gap-10 text-white text-3xl font-semibold transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        {/* Close */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute top-6 right-8 text-white"
        >
          <svg width="26" height="26" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
            <path d="M6 6l14 14M20 6L6 20" />
          </svg>
        </button>

        <a href="#about" onClick={() => setOpen(false)} className="hover:text-[rgb(183,148,244)] transition-colors">About</a>
        <a href="#focus" onClick={() => setOpen(false)} className="hover:text-[rgb(183,148,244)] transition-colors">Focus</a>
        <a href="#events" onClick={() => setOpen(false)} className="hover:text-[rgb(183,148,244)] transition-colors">Events</a>
        <a href="#sponsors" onClick={() => setOpen(false)} className="hover:text-[rgb(183,148,244)] transition-colors">Sponsors</a>
        <a href="#team" onClick={() => setOpen(false)} className="hover:text-[rgb(183,148,244)] transition-colors">Team</a>

        <Link
          href="#apply"
          onClick={() => setOpen(false)}
          className="text-white px-6 py-3 rounded-full mt-6 text-xl font-semibold transition-opacity hover:opacity-95"
          style={{
            backgroundImage: "linear-gradient(117.96deg, #6f58da, #5131e7)",
            boxShadow: "0 8px 24px rgba(111, 88, 218, 0.45)",
          }}
        >
          Apply
        </Link>
      </div>
    </>
  );
}