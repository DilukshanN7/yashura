"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import TiltCard from "../card";
import TiltCard2 from "./card";
import MagicalBento from "./card";

export default function BodyKits() {
  return (
    <motion.div className="mt-48">
      <MagicalBento
        cardData={[
          {
            title: "Alfa Romeo",
            href: "/alfa-romeo",
            icon: "https://placehold.co/600x400/png",
          },
          {
            title: "Aston Martin",
            href: "/aston-martin",
            icon: "https://placehold.co/600x400/png",
          },
          {
            title: "Audi",
            href: "/audi",
            icon: "https://placehold.co/600x400/png",
          },
          {
            title: "Bentley",
            href: "/bentley",
            icon: "https://placehold.co/600x400/png",
          },
          {
            title: "BMW",
            href: "/bmw",
            icon: "https://placehold.co/600x400/png",
          },
          {
            title: "Bugatti",
            href: "/bugatti",
            icon: "https://placehold.co/600x400/png",
          },
          {
            title: "Corvette",
            href: "/corvette",
            icon: "https://placehold.co/600x400/png",
          },
          {
            title: "Ferrari",
            href: "/ferrari",
            icon: "https://placehold.co/600x400/png",
          },
          {
            title: "Lamborghini",
            href: "/lamborghini",
            icon: "https://placehold.co/600x400/png",
          },
          {
            title: "Land Rover",
            href: "/land-rover",
            icon: "https://placehold.co/600x400/png",
          },
          {
            title: "Maserati",
            href: "/maserati",
            icon: "https://placehold.co/600x400/png",
          },
          {
            title: "Mercedes",
            href: "/mercedes",
            icon: "https://placehold.co/600x400/png",
          },
          {
            title: "Porsche",
            href: "/porsche",
            icon: "https://placehold.co/600x400/png",
          },
          {
            title: "Rolls Royce",
            href: "/rolls-royce",
            icon: "https://placehold.co/600x400/png",
          },
          {
            title: "Ford",
            href: "/ford",
            icon: "https://placehold.co/600x400/png",
          },
          {
            title: "Nissan",
            href: "/nissan",
            icon: "https://placehold.co/600x400/png",
          },
          {
            title: "Toyota",
            href: "/toyota",
            icon: "https://placehold.co/600x400/png",
          },
        ]}
      />
    </motion.div>
  );
}
