"use client";
import { motion } from "framer-motion";
import MagicalBento from "./card";

export default function BodyKits() {
  return (
    <motion.div className="mt-48">
      <MagicalBento
        cardData={[
          {
            title: "Alfa Romeo",
            href: "body-kits/alfa-romeo",
            icon: "/alfa.png",
          },
          {
            title: "Aston Martin",
            href: "body-kits/aston-martin",
            icon: "/aston.png",
          },
          {
            title: "Audi",
            href: "body-kits/audi",
            icon: "/audi.png",
          },
          {
            title: "Bentley",
            href: "body-kits/bentley",
            icon: "/bentley.png",
          },
          {
            title: "BMW",
            href: "body-kits/bmw",
            icon: "/bmw.png",
          },
          {
            title: "Bugatti",
            href: "body-kits/bugatti",
            icon: "/bugatti.png",
          },
          {
            title: "Corvette",
            href: "body-kits/corvette",
            icon: "/corvette.png",
          },
          {
            title: "Ferrari",
            href: "body-kits/ferrari",
            icon: "/ferrari.png",
          },
          {
            title: "Lamborghini",
            href: "body-kits/lamborghini",
            icon: "/lamborghini.png",
          },
          {
            title: "Land Rover",
            href: "body-kits/land-rover",
            icon: "/land.png",
          },
          {
            title: "Maserati",
            href: "body-kits/maserati",
            icon: "/maserati.png",
          },
          {
            title: "Mercedes Benz",
            href: "body-kits/mercedes-benz",
            icon: "/benz.png",
          },
          {
            title: "Porsche",
            href: "body-kits/porsche",
            icon: "/porsche.png",
          },
          {
            title: "Rolls Royce",
            href: "body-kits/rolls-royce",
            icon: "/rolls.png",
          },
          {
            title: "Ford",
            href: "body-kits/ford",
            icon: "/ford.png",
          },
          {
            title: "Nissan",
            href: "body-kits/nissan",
            icon: "/nissan.png",
          },
          {
            title: "Toyota",
            href: "body-kits/toyota",
            icon: "/toyota.png",
          },
        ]}
      />
    </motion.div>
  );
}
