"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 min-h-[3rem] py-3 w-full bg-white bg-opacity-80 shadow-lg sm:w-[36rem] sm:top-6 sm:rounded-full"
        initial={{ x: "-50%", y: -100, opacity: 0 }}
        animate={{ x: "-50%", y: 0, opacity: 1 }}
      >
        <nav className="h-full">
          <ul className="flex flex-wrap items-center justify-center w-full text-[0.9rem] font-medium text-gray-500">
            {links.map((link) => {
              return (
                <li key={link.hash}>
                  <Link
                    className="hover:text-gray-900 transition px-4"
                    href={link.hash}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}

export default Header;
