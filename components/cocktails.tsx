import { cocktailLists, mockTailLists } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

export default function Cocktails(){

    useGSAP(()=> {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 30%',
                end:'bottom 80%',
                scrub:true,
            }
        })

        parallaxTimeline
        .from('#c-left-leaf',{
            x: -100, y: 100
        })
        .from('#c-right-leaf',{
            x: 100, y: 100
        })
    },[]);

    return(
        <section id="cocktails" className="noisy">
            <Image src={'/images/cocktail-left-leaf.png'} width={800} height={800} alt='left-leaf' id='c-left-leaf'/>
            <Image src={'/images/cocktail-right-leaf.png'} width={800} height={800} alt='right-leaf' id='c-right-leaf'/>

            <div className="list">
                <div className="popular ml-4">
                    <h2 className="italic font-semibold">Most popular cocktails:</h2>

                    <ul >
                        {cocktailLists.map(({name,country,price,detail})=> (
                            <li key={name}>
                                <div className="md:me-28">
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>

                                <span className="mr-4">- {price}</span>

                            </li>
                        ))}
                    </ul>
                </div>

                <div className="loved mr-4">
                    <h2 className="italic font-semibold ml-4">Most loved mocktails:</h2>
                    <ul>
                        {mockTailLists.map(({name,country,price,detail})=> (
                            <li key={name}>
                                <div className="me-28 ml-4">
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>

                                <span>- {price}</span>

                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    )
}