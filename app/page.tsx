'use client';
import { ScrollTrigger,SplitText } from "gsap/all";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger,SplitText);

export default function Home() {
  return (
    <div className="flex-center h-screen">
      <h1 className="text-2xl font-bold">
        Welcome to GSAP with Next.js!
      </h1>
    </div>
  );
}
