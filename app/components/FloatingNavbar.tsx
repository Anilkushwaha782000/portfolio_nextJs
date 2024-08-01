"use client";
import React from "react";
import { FloatingNav } from "./ui/floatingnavbar";
import { IconHome, IconMessage, IconUser,IconBriefcase2,IconUsersGroup } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Testimonials",
      link: "#testimonials",
      icon: <IconUsersGroup className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skill",
      link: "#skills",
      icon: <IconBriefcase2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Project",
      link: "#project",
      icon: <IconBriefcase2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },

  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
