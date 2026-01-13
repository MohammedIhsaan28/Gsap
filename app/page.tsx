'use client';
import { ScrollTrigger,SplitText } from "gsap/all";
import { gsap } from "gsap";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

gsap.registerPlugin(ScrollTrigger,SplitText);

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>

    </main>
  );
}
 