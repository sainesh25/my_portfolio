import Link from 'next/link'
import React from 'react'
export default function Contact() {
    return (
        <>
            <div className="flex justify-center font-sans items-center flex-col py-12" id="contactId">
                <h1 className="mb-4 text-5xl font-bold text-[#cacaca] font-sans">Get In Touch</h1>
                <p className="mx-auto text-justify w-full sm:w-11/12 md:w-3/5 lg:w-[35rem] text-lg text-[#cacaca] leading-6 sm:leading-7 md:leading-8">
                    Hello there! I'm eager to embark on exciting opportunities and contribute my passion for web development. Whether you have a project, job offer, or just want to connect, feel free to reach out. Let's collaborate and create something amazing together!
                </p>
                <div className="">
                    <Link
                        href="mailto:patilsainesh25@gmail.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        style={{ borderImage: 'linear-gradient(#8e2de2 0%, #4a00e0 50%) 1' }}
                        className="mt-6 text-purple-500 text-sm flex items-center justify-center font-mono font-bold border-2 px-6 py-[0.2rem] h-12 w-32 transition-all duration-200 ease-[cubic-bezier(0,.52,1,.68)] hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[6px_5px_0px_#8e2de2] hover:rounded-[1px] sm:w-48 sm:h-16 sm:text-lg"
                    >
                        Say Hello!
                    </Link>
                </div>

            </div>

        </>
    )
}
