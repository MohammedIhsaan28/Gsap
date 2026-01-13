import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { SplitText } from "gsap/all";
import  gsap  from "gsap";

export default function AboutPage(){

    useGSAP(()=> {
        const titleSplit = SplitText.create('#about h2',{
            type: 'words',
        })

        const paraSplit = SplitText.create('#about p',{
            type: 'words',
        })

        const scrollTimeline = gsap.timeline({
            scrollTrigger:{
                trigger: '#about',
                start: 'top center'
            }
        })

        scrollTimeline
        .from(titleSplit.words,{
            opacity:0,
            duration: 1,
            yPercent: 100,
            ease: 'expo.out',
            stagger: 0.02
        })
        .from(paraSplit.words,{
            opacity:0,
            yPercent: 100,
            ease: 'expo.out',
            stagger: 0.02,
        },'-=0.8')
        .from('.top-grid div , .bottom-grid div',{
            opacity:0,
            yPercent: 20,
            ease: 'power1.inOut',
            stagger: 0.04

        },'-=0.5')
    },[]);

    return(
        <section id="about">
            <div className="mb-16 md:px-0 px-5">
                <div className="content">
                    <div className="md:col-span-8 ml-4">
                        <p className="badge font-semibold">Best Cocktails</p>
                        <h2>Where every detail matters <span className="text-white">-</span> from muddle to garnish</h2>

                    </div>

                    <div className="sub-content">
                        <p className="font-modern-negra text-xl">
                            Every cocktail we serve is a reflection of our obsession with detail from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable
                        </p>
                        <div>
                            <p className="md:text-3xl text-xl font-bold">
                                <span>4.5</span>/5
                            </p>
                            <p className="text-sm text-white-100 italic">
                                More than +1000 customers
                            </p>
                        </div>

                    </div>

                </div>

            </div>

            <div className="top-grid">
                <div className="md:col-span-3 ml-4">
                    <div className="noisy"/>
                        <Image src={'/images/abt1.png'} alt='grid-img-1' width={800} height={800}/>
                </div>

                <div className="md:col-span-6">
                    <div className="noisy"/>
                        <Image src={'/images/abt2.png'} alt='grid-img-3' width={800} height={800}/>
                </div>

                <div className="md:col-span-3 mr-4">
                    <div className="noisy"/>
                        <Image src={'/images/abt5.png'} alt='grid-img-5' width={800} height={800}/>
                </div>
            </div>

            <div className="bottom-grid ml-4">
                <div className="md:col-span-8 ">
                    <div className="noisy"/>
                        <Image src={'/images/abt3.png'} alt='grid-img-3' width={1000} height={1000}/>
                </div>
                <div className="md:col-span-4 mr-4">
                    <div className="noisy"/>
                        <Image src={'/images/abt4.png'} alt='grid-img-4' width={800} height={800}/>
                </div>
            </div>


        </section>
    )
}