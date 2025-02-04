"use client";
import React from "react";
import { Vortex } from "./ui/vortex";
import Link from "next/link";
export function VortexDemo() {
  return (
    <section id="contact" className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden py-16">
      <Vortex
        backgroundColor="rgb('3','3','29')"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Let&apos;s Connect
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6">
         Let's connect on LinkedIn! Feel free to send me a connection request.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/anil-kushwaha-843689215/"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-md"
            aria-label="Connect on LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>
      </Vortex>
    </section>
  );
}
