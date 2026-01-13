"use client";

import { allCocktails } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Menu() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo(
      "#title",
      {
        opacity: 0,
        yPercent: 100,
      },
      {
        opacity: 1,
        duration: 1,
        yPercent: 0,
        ease: "power1.inOut",
      }
    );

    gsap.fromTo(
      ".cocktail-imgs",
      {
        opacity: 0,
        xPercent: -100,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    );

    gsap.fromTo(
      ".details h2",
      {
        opacity: 0,
        yPercent: 100,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".details p",
      {
        opacity: 0,
        yPercent: 100,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        ease: "power1.inOut",
      }
    );

    gsap.timeline({
      scrollTrigger:{
          trigger: '#menu',
          start: 'top center',
      },
      ease:'power1.inOut',
    })
    .to('#m-right-leaf',{
        y:-50 ,duration:1, ease:'power1.inOut'
        })
    .to('#m-left-leaf',{
        y:-50 ,duration:1, ease:'power1.inOut'
    },'<')

  }, [currentIndex]);

  const totalCocktails = allCocktails.length;

  const goToSlide = (index: number) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOffset: number) => {
    return allCocktails[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  return (
    <section id="menu" aria-label="menu-heading">
      <Image
        src={"/images/slider-left-leaf.png"}
        alt="left-leaf"
        id="m-left-leaf"
        width={300}
        height={300}
      />
      <Image
        src={"/images/slider-right-leaf.png"}
        alt="right-leaf"
        id="m-right-leaf"
        width={300}
        height={300}
      />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={
                isActive
                  ? "text-amber-300 border-amber-200"
                  : "text-white/50 border-white/50 hover:text-amber-300/60 hover:border-amber-300/90"
              }
              onClick={() => {
                goToSlide(index);
              }}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left ml-16"
            onClick={() => {
              goToSlide(currentIndex - 1);
            }}
          >
            <span>{prevCocktail.name}</span>
            <Image
              src={"/images/right-arrow.png"}
              alt="right arrow"
              width={30}
              height={30}
              aria-hidden="true"
            />
          </button>

          <button
            className="text-left mr-8"
            onClick={() => {
              goToSlide(currentIndex + 1);
            }}
          >
            <span>{nextCocktail.name}</span>
            <Image
              src={"/images/left-arrow.png"}
              alt="left arrow"
              width={30}
              height={30}
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="cocktail">
          <Image
            src={currentCocktail.image}
            alt="current Cocktail"
            className="cocktail-imgs object-contain"
            width={400}
            height={400}
          />
        </div>

        <div className="recipe ml-8">
          <div ref={contentRef} className="info m-8">
            <p className="italic">Recipe for:</p>
            <p id="title" className="text-amber-300">{currentCocktail.name}</p>
          </div>

          <div className="details mr-8">
            <h2 className="border-b border-amber-100 p-2 text-amber-300">
              {currentCocktail.title}
            </h2>
            <p className="italic text-gray-300">
              {currentCocktail.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
