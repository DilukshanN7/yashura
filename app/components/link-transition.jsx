"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({ children, href, ...props }) => {
  const router = useRouter();

  const handleTransition = async (e) => {
    e.preventDefault();
    const body = document.querySelector("body");
    gsap.to(body, {
      scale: 0.9,
      opacity: 0,
    });

    await sleep(300);
    router.push(href);

    gsap.to(body, {
      scale: 1,
      opacity: 1,
    });
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};
