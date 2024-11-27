"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollingUp = prevScrollPos > currentScrollPos;

      setVisible(scrollingUp || currentScrollPos < 10); // Show navbar if at the top
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-0 w-full z-20 py-2 backdrop-blur-lg bg-[#1c1c1cb7] border-b border-[#ffffff10] transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-center items-center py-4 px-8">
        <Link href="#homeId" className="text-[#cacaca] font-semibold text-lg mx-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#c179ff] hover:to-[#7e3fff] transition duration-300">
          Home
        </Link>
        <Link href="#skillId" className="text-[#cacaca] font-semibold text-lg mx-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#c179ff] hover:to-[#7e3fff] transition duration-300">
          Skills
        </Link>
        <Link href="#projectId" className="text-[#cacaca] font-semibold text-lg mx-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#c179ff] hover:to-[#7e3fff] transition duration-300">
          Projects
        </Link>
        <Link href="#contactId" className="text-[#cacaca] font-semibold text-lg mx-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#b463fc] hover:to-[#7e3fff] transition duration-300">
          Contact
        </Link>
        <Link href={'/Sainesh_Patil_Resume.pdf'} target="_blank" className="text-[#cacaca] font-semibold text-lg mx-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#c179ff] hover:to-[#7e3fff] transition duration-300">
          Resume
        </Link>
        
      </div>
    </nav>
  );
}
