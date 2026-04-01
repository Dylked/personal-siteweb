import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'

const Hero = () => {
    return (
        <div className="relative min-h-screen w-screen left-1/2 -translate-x-1/2 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0">
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
            </div>
            <div className="absolute inset-0 h-full w-full bg-white
                dark:bg-black-100 
                dark:bg-grid-white/[0.03] bg-grid-black/[0.2] ">
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            </div>
            <div className="flex items-center justify-center w-full px-4 relative z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
                    {/*                     <p className="uppercase tracking-widest text-xs  text-blue-100 max-w-80">
                        Un site web develop&eacute; avec React
                    </p> */}
                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5x lg:text-6xl mb-4"
                        words="Transformer des besoins produit en expériences web concrètes"
                    />
                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Salut, Je suis Dylan , un Full Stack Developp&eacute;ur bas&eacute;
                        en France
                    </p>
                    <a href="#about">
                        <MagicButton
                            title="En savoir plus"
                            icon={<FaLocationArrow />}
                            position="right"

                        />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Hero