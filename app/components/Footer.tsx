import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandFacebook,
} from "@tabler/icons-react";
const Footer = () => {
  return (
    <div className="border-t border-neutral-100 dark:border-white/[0.1] py-16 mt-16 dark:bg-brand ">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start">
        <div>
          <div className="mr-4 md:flex mb-4">
            <a
              className="flex items-center justify-center space-x-2 text-2xl font-bold text-center text-neutral-600 dark:text-gray-100 selection:bg-emerald-500 mr-10 py-0"
              href="/"
            >
              <div className="flex flex-col">
                <h1 className="text-black dark:text-white font-sans">Anil </h1>
                <p className="text-neutral-500 dark:text-neutral-400">
                  Full Stack Developer
                </p>
              </div>
            </a>
          </div>
          <div className="mt-2 flex flex-row gap-2">
            <IconBrandLinkedin />
            Connect with me on{" "}
            <a
              target="__blank"
              className="dark:text-sky-500 text-neutral-600 font-medium"
              href="https://www.linkedin.com/in/anil-kushwaha-843689215/"
            >
              LinkedIn
            </a>
          </div>
          <div className="mt-2 flex flex-row gap-2">
            <IconBrandGithub />
            Follow my work on{" "}
            <a
              className="dark:text-sky-500 font-medium text-neutral-600"
              target="__blank"
              href="https://github.com/Anilkushwaha782000"
            >
              GitHub
            </a>
          </div>
          <div className="mt-6 flex flex-row gap-6 ">
            <IconBrandFacebook />
            <IconBrandInstagram />
            <IconBrandTwitter />
            <IconBrandLinkedin />
            <IconBrandGithub />
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center mt-10 md:mt-0">
          <div className="flex flex-col items-center space-y-4">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/projects"
            >
              Projects
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/skills"
            >
              Skills
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/resume"
            >
              Resume
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/blog"
            >
              Blog
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/contact"
            >
              Contact
            </a>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <a
              target="__blank"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/"
            >
              Twitter
            </a>
            <a
              target="__blank"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
