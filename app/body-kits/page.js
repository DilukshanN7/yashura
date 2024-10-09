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
            icon: "/alfa.png",
          },
          {
            title: "Aston Martin",
            href: "/aston-martin",
            icon: "/aston.png",
          },
          {
            title: "Audi",
            href: "/audi",
            icon: "/audi.png",
          },
          {
            title: "Bentley",
            href: "/bentley",
            icon: "/bentley.png",
          },
          {
            title: "BMW",
            href: "/bmw",
            icon: "/bmw.png",
          },
          {
            title: "Bugatti",
            href: "/bugatti",
            icon: "/bugatti.png",
          },
          {
            title: "Corvette",
            href: "/corvette",
            icon: "/corvette.png",
          },
          {
            title: "Ferrari",
            href: "/ferrari",
            icon: "/ferrari.png",
          },
          {
            title: "Lamborghini",
            href: "/lamborghini",
            icon: "/lamborghini.png",
          },
          {
            title: "Land Rover",
            href: "/land-rover",
            icon: "/land.png",
          },
          {
            title: "Maserati",
            href: "/maserati",
            icon: "/maserati.png",
          },
          {
            title: "Mercedes Benz",
            href: "/mercedes-benz",
            icon: "/benz.png",
          },
          {
            title: "Porsche",
            href: "/porsche",
            icon: "/porsche.png",
          },
          {
            title: "Rolls Royce",
            href: "/rolls-royce",
            icon: "/rolls.png",
          },
          {
            title: "Ford",
            href: "/ford",
            icon: "/ford.png",
          },
          {
            title: "Nissan",
            href: "/nissan",
            icon: "/nissan.png",
          },
          {
            title: "Toyota",
            href: "/toyota",
            icon: "/toyota.png",
          },
        ]}
      />
    </motion.div>
  );
}
