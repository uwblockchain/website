"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black backdrop-blur w-full flex items-center justify-start px-8 py-4 min-h-24"
    >
      <div className="mx-auto max-w-7xl w-full flex items-center justify-start">
        <div className="flex items-center h-16 md:h-24 shrink-0">
          <Image
            src="/images/transparent logo for website copy 2.png"
            alt="UW Blockchain Society logo"
            width={256}
            height={256}
            className="h-16 md:h-24 w-auto object-contain"
            unoptimized
            priority
          />
          {/* Brand text removed per request; logo-only branding */}
        </div>
        {/* Menu removed per request; homepage will contain the menu section */}
      </div>
    </motion.nav>
  );
}