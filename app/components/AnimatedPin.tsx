"use client";
import React from "react";
import { PinContainer } from "./ui/3dpin";

export function AnimatedPinDemo() {
  const pinData = [
    {
      name: "Blog website",
      title: "https://mern-blog-sxis.onrender.com/",
      href: "https://mern-blog-sxis.onrender.com/",
      heading: "Aceternity UI",
      description: "Customizable Tailwind CSS and Framer Motion Components.",
      gradientClasses: "from-violet-500 via-purple-500 to-blue-500",
      Tech_stack: [
        "ReactJs",
        "Nodejs",
        "expresJs",
        "Mongodb",
        "Tailwind Css",
        "JWT",
      ],
    },
    {
      name: "Ecommerce website with ReactJs",
      title: "https://reactifymarket.netlify.app/",
      href: "https://reactifymarket.netlify.app/",
      heading: "Aceternity UI",
      description: "Customizable Tailwind CSS and Framer Motion Components.",
      gradientClasses: "from-violet-500 via-purple-500 to-blue-500",
      Tech_stack: ["ReactJs", "HTMl", "CSS", "Tailwind Css"],
    },
    {
      name: "Ecommerce with html,css,js and bootstrap",
      title: "https://anilkushwaha782000.github.io/E-Commerce/",
      href: "https://anilkushwaha782000.github.io/E-Commerce/",
      heading: "Aceternity UI",
      description: "Customizable Tailwind CSS and Framer Motion Components.",
      gradientClasses: "from-violet-500 via-purple-500 to-blue-500",
      Tech_stack: ["HTML", "CSS", "Bootstrap", "Javascript"],
    },
    {
      name: "Bootstrap practice",
      title: "https://anilkushwaha782000.github.io/bootstarp_website/",
      href: "https://anilkushwaha782000.github.io/bootstarp_website/",
      heading: "Aceternity UI",
      description: "Customizable Tailwind CSS and Framer Motion Components.",
      gradientClasses: "from-violet-500 via-purple-500 to-blue-500",
      Tech_stack: ["HTML", "CSS", "Bootstrap"],
    },
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
        {pinData.map((item, index) => (
          <div key={index} className="mb-6 md:mb-6 lg:mb-8 ">
            <PinContainer title={item.title} href={item.href}>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  {item.name}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">{item.description}</span>
                </div>
                <div className="mt-4">
                  <p className="text-xl font-bold text-white-100">
                    Tech Stack!
                  </p>
                  {item.Tech_stack.map((stack, index) => (
                    <li key={index} className="text-sm">
                      {stack}
                    </li>
                  ))}
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br" />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
