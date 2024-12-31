'use client'
import React from 'react'
import MyName from '../MyName/MyName'
import Navbar from '../Navbar/Navbar'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Social from '../Socials/Social'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import ScrollProgress from '@/components/ui/scroll-progress'
import { Experience } from '../Experience/Experience'

export default function HomePage() {


    return (
        <>
            <ScrollProgress className={`bg-gradient-to-r from-[#8e2de2] to-[#4a00e0]
              `}/>
            <Navbar />
            <div className="flex justify-center items-center flex-col">
                <div className="max-w-7xl">
                    <MyName />
                    <Skills/>
                    <Experience/>
                    <Projects/>
                    <Contact />
                    <Social/>
                </div>
            </div>
            <Footer/>
        </>

    )
}
