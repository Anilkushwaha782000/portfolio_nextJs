"use client"
import React from 'react'
import { TextGenerateEffect } from "./ui/textGenerateeffect";
import { AnimatedPinDemo } from './AnimatedPin';
function RectentProject() {
  const words="Exploring Creativity: A Showcase of My Projects!"
  return (
    <section id="project" className='py-16'>
    <TextGenerateEffect className='text-center text-6xl py-8' words={words} />
    <AnimatedPinDemo />
    </section>
  )
}

export default RectentProject