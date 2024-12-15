import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Social() {
    return (
        <>
            {/* Social icons for desktop */}
            <div className="sm:block hidden fixed top-[40vh] left-[-1rem]">
                <div className="flex flex-col items-center w-24">
                    <Link
                        href="https://www.linkedin.com/in/sainesh-patil/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-[#aaa] transition-transform transform hover:scale-110 hover:text-purple-600 mb-8"
                    >
                        <SlSocialLinkedin alt="LinkedIn" size={25} />
                    </Link>
                    <Link
                        href="https://github.com/sainesh25"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-[#aaa] transition-transform transform hover:scale-110 hover:text-purple-600 mb-8"
                    >
                        <FiGithub alt="GitHub" size={25} />
                    </Link>
                    <Link
                        href="https://www.instagram.com/saineshpatil2505/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-[#aaa] transition-transform transform hover:scale-110 hover:text-purple-600 mb-8"
                    >
                        <FaInstagram alt="Instagram" size={25} />
                    </Link>
                    <Link
                        href="https://twitter.com/SaineshPatil25"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-[#aaa] transition-transform transform hover:scale-110 hover:text-purple-600 mb-4"
                    >
                        <FaXTwitter alt="Twitter" size={25} />
                    </Link>
                    <div className="w-px h-[50vh] bg-gray-400 mt-4"></div>
                </div>
            </div>

            {/* Email link for desktop */}
            <div className="hidden fixed sm:flex flex-col items-center right-[-4rem] bottom-[-4vh]">
                <Link
                    href="mailto:patilsainesh25@gmail.com"
                    className="font-mono relative text-[#cacaca] transform top-[-87px] rotate-90 transition-transform hover:-translate-y-2 hover:text-purple-600"
                >
                    patilsainesh25@gmail.com
                </Link>
                <div className="w-px h-[36vh] bg-gray-400 mt-4"></div>
            </div>

            {/* Social icons for mobile */}
            <div className="bottom-0 left-0 w-full flex justify-evenly sm:hidden">
                <Link
                    href="https://www.linkedin.com/in/sainesh-patil/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="transition-transform text-[#aaa] transform hover:scale-110 hover:text-purple-600"
                >
                    <SlSocialLinkedin alt="LinkedIn" size={21} />
                </Link>
                <Link
                    href="https://github.com/sainesh25"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="transition-transform text-[#aaa] transform hover:scale-110 hover:text-purple-600"
                >
                    <FiGithub alt="GitHub" size={21} />
                </Link>
                <Link
                    href="https://www.instagram.com/saineshpatil2505/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="transition-transform text-[#aaa] transform hover:scale-110 hover:text-purple-600"
                >
                    <FaInstagram alt="Instagram" size={21} />
                </Link>
                <Link
                    href="https://twitter.com/SaineshPatil25"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="transition-transform text-[#aaa] transform hover:scale-110 hover:text-purple-600"
                >
                    <FaXTwitter alt="Twitter" size={21} />
                </Link>
            </div>
        </>
    );
}
