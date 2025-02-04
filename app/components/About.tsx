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
      className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500  font-normal dark:text-neutral-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      I am a passionate Frontend Developer with a strong foundation in Computer Science and over 2 years of hands-on experience in building stunning, user-centric websites. I specialize in React, Next.js, Tailwind CSS, and creating seamless digital experiences that look great and perform beautifully.
    </motion.p>
    <motion.p
      className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500  font-normal dark:text-neutral-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      With a keen eye for detail, I focus on crafting responsive, high-performance websites that provide exceptional user experiences. I'm always learning, experimenting, and evolving my skills to stay ahead of trends and deliver top-notch work.
    </motion.p>
    <motion.p
      className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500  font-normal dark:text-neutral-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
     Outside of coding, I&apos;m an explorer of new technologies, an advocate for open-source contributions, and an enthusiast for outdoor adventures. I love connecting with like-minded professionals and exploring fresh opportunities.
    </motion.p>
    <motion.p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500  font-normal dark:text-neutral-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
    >
     Explore my <a href="#project" className="text-blue-600 hover:underline">projects</a> and <a href="#contact" className="text-blue-600 hover:underline">get in touch</a> if you'd like to collaborate or discuss exciting opportunities!
    </motion.p>
  </section>
  );
};

