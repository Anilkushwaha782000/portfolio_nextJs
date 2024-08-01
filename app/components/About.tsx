// pages/about.js
"use client";
import { motion } from 'framer-motion';
export function About() {
    const words="About Us!"
  return (
    <section id='about' className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* <TextGenerateEffect className='text-center text-6xl py-8' words={words} /> */}
    </motion.h1>
    <motion.h1
      className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Hi! I&apos;m Anil
    </motion.h1>
    <motion.p
      className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      I am a passionate web developer with a background in Computer Science and over 2 years of experience in building dynamic and responsive websites. My journey began with a deep love for coding, which has driven me to create numerous projects across various industries. I specialize in modern web technologies including React, Node.js, and Tailwind CSS.
    </motion.p>
    <motion.p
      className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      Over the years, I&apos;ve developed a keen eye for detail and a commitment to delivering high-quality work. My approach to development is centered around creating scalable and maintainable solutions while focusing on user experience and collaboration.
    </motion.p>
    <motion.p
      className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source projects, and spending time outdoors. I&apos;m always eager to connect with like-minded professionals and explore new opportunities.
    </motion.p>
    <motion.p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
    >
      Feel free to explore my <a href="#project" className="text-blue-600 hover:underline">projects</a> and <a href="#contact" className="text-blue-600 hover:underline">get in touch</a> if you&apos;d like to collaborate or discuss potential opportunities!
    </motion.p>
  </section>
  );
};

