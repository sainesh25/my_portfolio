import React from 'react'
import MyName from '../MyName/MyName'
import Navbar from '../Navbar/Navbar'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Social from '../Socials/Social'

export default function HomePage() {


    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center flex-col">
                <div className="max-w-7xl">
                    <MyName />
                    <Contact />
                    <Social/>
                </div>
            </div>
            <Footer/>
        </>

    )
}
