'use client';
import { ScrollTrigger,SplitText } from "gsap/all";
import { gsap } from "gsap";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Cocktails from "@/components/cocktails";
import AboutPage from "@/components/about";

gsap.registerPlugin(ScrollTrigger,SplitText);

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <AboutPage/>
    </main>
  );
}
 