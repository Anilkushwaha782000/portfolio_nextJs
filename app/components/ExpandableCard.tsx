"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./hook/useoutsideclick";
import { TypewriterEffect } from "./ui/typeWriterEffetc";
import { GiAchievement } from "react-icons/gi";
import { div } from "three/webgpu";
export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="py-16">
      <TypewriterEffect
        words={[
          {
            text: "Experience",
          },
          {
            text: " & ",
          },
          {
            text: "Achievements.",
            className: "text-blue-500 dark:text-blue-500",
          },
        ]}
        className="text-xl"
        cursorClassName="your-cursor-class-name"
      />
      <p className="text-center text-xl mb-4 mt-4 ">
        Showcasing my professional roles and key accomplishments that highlight
        my skills and impact
      </p>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                {/* <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                /> */}
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {/* <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-violet-800 text-white"
                  >
                    {active.ctaText}
                  </motion.a> */}
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base  md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                {/* <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                /> */}
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-violet-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Software design Engineer 1",
    title: "Newgen Software Technologies | Noida, UP",
    src: "",
    ctaText: "Check more details",
    ctaLink: "",
    content: () => {
      const Data = [
        {
          skills: [
            "HTML",
            "CSS",
            "Bootstrap",
            "Jquery",
            "JSP",
            "Javascript",
            "Java",
          ],
          experience: "2 years",
          Achievements: [
            "High Five awards in recognition of exceptional teamwork, dedication, and significant contributions to team projects.",
            "Problem Solving (Basic)- Hackerrank",
          ],
        },
      ];
      return (
        <div>
          {Data.map((item, index) => (
            <div key={index}>
              <div>
               <h1 className="text-white font-bold text-xl">Total year of experience- <span className="text-white-100 text-2xl">{item.experience}</span></h1>
              </div>
              <div>
                <TypewriterEffect
                  words={[
                    {
                      text: "Skills",
                      className: "text-xl",
                    },
                    {
                      text: "through",
                      className: "text-xl",
                    },
                    {
                      text: "Experiences.",
                      className: "text-blue-500 dark:text-blue-500 text-xl",
                    },
                  ]}
                  className="text-xl mb-6"
                  cursorClassName="w-[2px] h-2 md:h-2 lg:h-4"
                />
                <ul className="flex flex-wrap gap-4 mb-4">
                  {item.skills.map((list, index) => (
                    <li
                      className="text-white p-2 rounded-lg flex-1 basis-[calc(33.333%-1rem)] sm:basis-[calc(50%-1rem)]"
                      style={{ backgroundColor: "rgb(3, 3, 29)" }}
                      key={index}
                    >
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 mt-6">
                <h2 className="text-white text-xl text-center mb-2">
                  Achievements and Certifications
                </h2>
                {item.Achievements.map((item, key) => (
                  <li className="text-white text-lg font-semibold leading-relaxed mt-4">
                    {item}
                  </li>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    },
  },
  {
    description: "Software Engineer Trainee",
    title: "Newgen",
    src: "",
    ctaText: "Check more details",
    ctaLink: "",
    content: () => {
      const internshipData = [
        {
          skills: [
            "Communication",
            "Teamwork",
            "Problem solving",
            "Management"
          ],
          experience: "",
          Achievements:
            ""
        },
      ];
      return (
        <div>
          {internshipData.map((item, index) => (
            <div className="mb-4">
              <h3 className="text-center text-xl text-white font-bold mb-4">Skill I have gained during internship</h3>
              <ul className="flex flex-wrap gap-4 mb-4">
                {item.skills.map((list, index) => (
                  <li
                    className="text-white p-2 rounded-lg flex-1 basis-[calc(33.333%-1rem)] sm:basis-[calc(50%-1rem)]"
                    style={{ backgroundColor: "rgb(3, 3, 29)" }}
                    key={index}
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    },
  },
];
