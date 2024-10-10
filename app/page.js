"use client";
import { motion } from "framer-motion";
import React from "react";
import MagicalBento from "./components/card";

export default function Home() {
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

  return (
    <motion.div className="lg:justify-center pt-48 lg:pt-0 items-center h-screen gap-x-14 gap-y-14 lg:gap-y-0">
      <MagicalBento
        cardData={[
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
        ]}
      />
    </motion.div>
  );
}
