import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import { ContactForm } from './ui/ContactForm'

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-20" id="contact">

            <div className="flex flex-col items-center">
                <ContactForm />
            </div>
            <div className="flex mt-16 mb-5 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    2026 Dylan Nunez
                </p>
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                            <img src={profile.img} alt={profile.id} width={20} height={20} />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer