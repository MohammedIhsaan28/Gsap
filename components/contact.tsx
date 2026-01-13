import { openingHours, socials } from "@/constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function Contact() {
    useGSAP(()=> {
        const titleSplit = SplitText.create('#contact h2', {type: 'words'});

        const timeline = gsap.timeline({
            scrollTrigger:{
                trigger: '#contact',
                start: 'top center',
            },
            ease:'power1.inOut',
        })

        timeline
        .from(titleSplit.words, {
            opacity:0,
            yPercent:100,
            stagger:0.06,
        })
        .from('#contact h3, #contact p',{
            opacity:0,
            yPercent:100,
            stagger:0.02,
        })
        .to('#f-right-leaf',{
            y:-50 ,duration:1, ease:'power1.inOut'
        })
        .to('#f-left-leaf',{
            y:-50 ,duration:1, ease:'power1.inOut'
        },'<')
    })

    return(
        <footer id='contact'>
            <Image src={'/images/footer-right-leaf.png'} alt='right-leaf' id='f-right-leaf' width={400} height={400}/>
            <Image src={'/images/footer-left-leaf.png'} alt='left-leaf' id='f-left-leaf' width={400} height={400}/>

            <div className="content">
                <h2>Where to Find Us</h2>

                <div className="italic text-gray-300">
                   <h3>Visit Our Store</h3>
                   <p>456 , Lion Teritory, Los Angeles, CA 90001</p>
                </div>

                <div className="italic text-gray-300">
                    <h3>Contact Us</h3>
                    <p>999-888-7777</p>
                    <p>hello@example.com</p>
                </div>

                <div className="italic text-gray-300">
                    <h3>Open Every Day</h3>
                    {openingHours.map((time)=> (
                        <p key={time.day}>
                            {time.day} : {time.time}
                        </p>
                    ))}
                </div>

                <div className="italic text-gray-300">
                    <h3>Socials</h3>

                    <div className="flex-center gap-5">
                        {socials.map((social)=> (
                            <Link href={social.url} key={social.name} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                                <Image src={social.icon} alt={social.name} width={30} height={30}/>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        
        </footer>
    )
}