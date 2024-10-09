'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const categories = [
    { title: "Body Kits", href: "/body-kits", image: "https://placehold.co/600x400/png" },
    { title: "Wheels", href: "/wheels", image: "https://placehold.co/600x400/png" },
    { title: "Showroom", href: "/showroom", image: "https://placehold.co/600x400/png" },
    { title: "About Us", href: "/about-us", image: "https://placehold.co/600x400/png" },
  ]

  return (
    <div className="flex flex-col lg:flex-row lg:justify-center pt-48 lg:pt-0 items-center h-screen gap-x-14 gap-y-14 lg:gap-y-0">
      {categories.map((category, index) => (
        <Link key={index} href={category.href}>
          <motion.div whileHover={{ scale: 1.1 }} className="lg:grid lg:grid-rows-2 w-64 border-8 h-96 rounded-xl">
            <div className="relative">
              <Image src={category.image} layout="fill"></Image>
            </div>
            <div className="flex text-3xl font-bold justify-center items-center h-48">
              <h1>{category.title}</h1>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
