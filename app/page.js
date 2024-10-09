'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import TiltCard from "./card";

export default function Home() {
  const categories = [
    { title: "Body Kits", href: "/body-kits", image: "https://placehold.co/600x400/png" },
    { title: "Wheels", href: "/wheels", image: "https://placehold.co/600x400/png" },
    { title: "Showroom", href: "/showroom", image: "https://placehold.co/600x400/png" },
    { title: "About Us", href: "/about-us", image: "https://placehold.co/600x400/png" },
  ]

  return (
    <motion.div className="flex flex-col lg:flex-row lg:justify-center pt-48 lg:pt-0 items-center h-screen gap-x-14 gap-y-14 lg:gap-y-0 overflow-y-hidden overflow-x-hidden">
      <AnimatePresence>
      {categories.map((category, index) => (
        <Link key={index} href={category.href}>
          <TiltCard image={category.image} title={category.title}/>
        </Link>
      ))}
      </AnimatePresence>
    </motion.div>
  );
}
