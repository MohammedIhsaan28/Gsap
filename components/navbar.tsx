import { navLinks } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger: 'nav',
                start: 'bottom top',
            }
        });

        navTween.fromTo('nav',{
            backgroundColor: 'transparent',
        },{
            backgroundColor: '#00000050',
            backdropFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        })
    },[]);

    return(
        <nav>
            <div>
                <Link href={'/'} className="flex items-center gap-2">
                    <Image src={'/images/logo.png'} alt='Velvet Logo' width={40} height={40}/>
                    <p>Velvet Pour</p>
                </Link>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <Link href={`/#${link.id}`}>{link.title}</Link>

                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}