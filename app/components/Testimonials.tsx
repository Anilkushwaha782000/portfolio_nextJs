"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/movingcard";
import { TextGenerateEffect } from "./ui/textGenerateeffect";
export function Testimonials() {
    const words="Our Commitment to Excellence"
  return (
    <section id="testimonials" className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black-100 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
     <TextGenerateEffect words={words} className="mb-4"/>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </section>
  );
}

const testimonials = [
  {
    quote: "You must be the change you wish to see in the world.",
    name: "Mahatma Gandhi",
    title: "Mahatma Gandhi's Philosophy",
  },
  {
    quote: "The best way to find yourself is to lose yourself in the service of others.",
    name: "Mahatma Gandhi",
    title: "Mahatma Gandhi's Philosophy",
  },
  {
    quote: "Arise, awake, and stop not until the goal is reached.",
    name: "Swami Vivekananda",
    title: "Swami Vivekananda's Teachings",
  },
  {
    quote: "In a gentle way, you can shake the world.",
    name: "Mahatma Gandhi",
    title: "Mahatma Gandhi's Philosophy",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    name: "Steve Jobs",
    title: "Steve Jobs' Philosophy",
  }
];
