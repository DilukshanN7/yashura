"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Home() {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  const categories = [
    {
      title: "Body Kits",
      href: "/body-kits",
      image: "https://placehold.co/600x400/png",
    },
    {
      title: "Wheels",
      href: "/wheels",
      image: "https://placehold.co/600x400/png",
    },
    {
      title: "Showroom",
      href: "/showroom",
      image: "https://placehold.co/600x400/png",
    },
    {
      title: "About Us",
      href: "/about-us",
      image: "https://placehold.co/600x400/png",
    },
  ];

  const router = useRouter();

  const handleTransition = async (href, e) => {
    e.preventDefault();

    gsap.to(cardsRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      stagger: 0.1,
      ease: "power3.in",
    });

    await sleep(600);
    router.push(href);
  };

  return (
    <motion.div
      ref={containerRef}
      className="flex flex-col lg:flex-row lg:justify-center pt-48 lg:pt-0 items-center h-screen gap-x-14 gap-y-14 lg:gap-y-0"
    >
      {categories.map((category, index) => (
        <Link
          onClick={(e) => handleTransition(category.href, e)}
          key={index}
          href={category.href}
        >
          <motion.div
            ref={(el) => (cardsRef.current[index] = el)}
            whileHover={{ scale: 1.05 }}
            className="grid grid-rows-2 w-64 border-8 border-slate-900 h-96 rounded-xl"
          >
            <div className="relative">
              <Image
                src={category.image}
                fill
                style={{ objectFit: "cover" }}
                alt={category.title}
              />
            </div>
            <div className="flex bg-black text-3xl font-bold text-white justify-center items-center h-42">
              <h1>{category.title}</h1>
            </div>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
}
