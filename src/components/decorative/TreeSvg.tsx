"use client";

import { motion } from "framer-motion";

interface TreeSvgProps {
  className?: string;
}

/**
 * Decorative Tree SVG
 * Monochrome design with transparent background
 * Uses CSS variables for theming
 * Growing animation from bottom to top
 */
export function TreeSvg({ className = "" }: TreeSvgProps) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ground */}
      <motion.path
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        d="M0,450
           L40,440 L80,455 L120,435
           L160,450 L200,425 L240,445
           L280,430 L320,450 L360,435
           L420,455 L460,440 L500,450
           L500,500 L0,500 Z"
        fill="currentColor"
      />

      {/* Main Trunk and Branches - Growing from bottom up */}
      <motion.path
        initial={{ scaleY: 0, transformOrigin: "bottom" }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        d="M235,440
           Q240,350 245,300

           L245,300 Q200,250 160,260
           L160,260 Q130,220 110,230
           l-10,-10 l5,15 l-15,5 l15,5 l-5,15 l10,-10 l10,10 l-5,-15 l15,-5 l-15,-5 l5,-15
           M160,260 Q150,200 130,150
           l-12,-12 l6,18 l-18,6 l18,6 l-6,18 l12,-12 l12,12 l-6,-18 l18,-6 l-18,-6 l6,-18

           M245,300 Q270,250 300,220

           M300,220 Q290,150 280,100
           l-15,-15 l8,20 l-20,8 l20,8 l-8,20 l15,-15 l15,15 l-8,-20 l20,-8 l-20,-8 l8,-20

           M300,220 Q350,200 380,210
           L380,210 Q410,170 430,150
           l-12,-12 l6,18 l-18,6 l18,6 l-6,18 l12,-12 l12,12 l-6,-18 l18,-6 l-18,-6 l6,-18

           M380,210 Q400,250 420,260
           l-10,-10 l5,15 l-15,5 l15,5 l-5,15 l10,-10 l10,10 l-5,-15 l15,-5 l-15,-5 l5,-15

           M245,300 L255,440 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Foliage Circles - Appear after tree grows */}
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 1.6, type: "spring", stiffness: 200 }}
        cx="110"
        cy="230"
        r="15"
        fill="currentColor"
      />

      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 1.7, type: "spring", stiffness: 200 }}
        cx="130"
        cy="150"
        r="18"
        fill="currentColor"
      />

      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 1.8, type: "spring", stiffness: 200 }}
        cx="280"
        cy="100"
        r="20"
        fill="currentColor"
      />

      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 1.75, type: "spring", stiffness: 200 }}
        cx="430"
        cy="150"
        r="18"
        fill="currentColor"
      />

      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 1.65, type: "spring", stiffness: 200 }}
        cx="420"
        cy="260"
        r="15"
        fill="currentColor"
      />
    </motion.svg>
  );
}
