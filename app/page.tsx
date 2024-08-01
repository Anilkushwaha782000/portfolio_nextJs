import Image from "next/image";
import Hero from "./components/Hero";
import { FeaturesSectionDemo } from "./components/FeaturesSection";
import Grid from "./components/Grid";
import RectentProject from "./components/RectentProject";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./components/ui/tracingbeam";
import { ExpandableCardDemo } from "./components/ExpandableCard";
import { Testimonials } from "./components/Testimonials";
import { VortexDemo } from "./components/VortexDemo";
import Footer from "./components/Footer";
import { About } from "./components/About";
export default function Home() {
  return (
    <TracingBeam>
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
       <Hero/>
       {/* <Grid/> */}
       <About/>
       <FeaturesSectionDemo />
       <RectentProject/>
       <ExpandableCardDemo/>
       <Testimonials/>
       <VortexDemo/>
       <Footer/>
      </div>
   </main>
   </TracingBeam>
  );
}
