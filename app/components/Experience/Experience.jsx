import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-[#cacaca] text-xs md:text-sm font-normal mb-8">
            Frontend Developer at Kenmark ITAN Solutions - Working on diverse projects including Games Booking Engine, Music Distribution Platform, and E-commerce solutions
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full p-4 bg-neutral-900 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <h3 className="text-[#cacaca] text-sm">Smaaash Games Booking</h3>
              <p className="text-[#cacaca] text-xs">Enhanced UX with Framer Motion, 25% faster load time</p>
              <Image src={'/bookingengine.png'} className="md:block hidden h-[80%] mt-2 w-full object-contain rounded-md object-top" width={0} height={0} unoptimized alt="Sainesh's projects" />
            </div>
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full p-4 bg-neutral-900 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <h3 className="text-[#cacaca] text-sm">MELO Music Platform</h3>
              <p className="text-[#cacaca] text-xs">Led team of 3, 30% faster page loads</p>
              <Image src={'/melo.png'} className="md:block hidden h-[80%] mt-2 w-full object-cover rounded-md object-top" width={0} height={0} unoptimized alt="Sainesh's projects" />

            </div>
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full p-4 bg-neutral-900 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <h3 className="text-[#cacaca] text-sm">Omarun Pharma</h3>
              <p className="text-[#cacaca] text-xs">E-commerce with ShadCN, 20% faster development</p>
              <Image src={'/omarun.png'} className="md:block hidden h-[80%] mt-2 w-full object-cover rounded-md object-top" width={0} height={0} unoptimized alt="Sainesh's projects" />

            </div>
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full p-4 bg-neutral-900 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <h3 className="text-[#cacaca] text-sm">Kenmark Website</h3>
              <p className="text-[#cacaca] text-xs">40% increase in user engagement</p>
              <Image src={'/kenmark.png'} className="md:block hidden h-[80%] mt-2 w-full object-cover rounded-md object-top" width={0} height={0} unoptimized alt="Sainesh's projects" />

            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-[#cacaca] text-xs md:text-sm font-normal mb-8">
            Completed Web Development program at Excel Technical Institute with focus on modern technologies
          </p>
          <p className="text-[#cacaca] text-xs md:text-sm font-normal mb-8">
            Developed personal projects including School Management System and Weather Application
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full p-4 bg-neutral-900 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <h3 className="text-[#cacaca] text-sm">School Management System</h3>
              <p className="text-[#cacaca] text-xs">Full CRUD operations with MERN stack</p>
            </div>
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full p-4 bg-neutral-900 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <h3 className="text-[#cacaca] text-sm">Weather Application</h3>
              <p className="text-[#cacaca] text-xs">Real-time updates using React.js</p>
            </div>
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full p-4 bg-neutral-900 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <h3 className="text-[#cacaca] text-sm">WordPress Development</h3>
              <p className="text-[#cacaca] text-xs">Freelance projects for Inteledyne and Dr. Cindy</p>
            </div>
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full p-4 bg-neutral-900 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <h3 className="text-[#cacaca] text-sm">Technical Skills</h3>
              <p className="text-[#cacaca] text-xs">React, Next.js, Node.js, MongoDB, Git</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div>
          <p className="text-[#cacaca] text-xs md:text-sm font-normal mb-4">
            Educational Background and Achievements
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-[#cacaca] text-xs md:text-sm">
              ✅ B.Sc. IT from Mumbai University - CGPA 9.13
            </div>
            <div className="flex gap-2 items-center text-[#cacaca] text-xs md:text-sm">
              ✅ HSC - 82.17% from Kirti M Doongursee College
            </div>
            <div className="flex gap-2 items-center text-[#cacaca] text-xs md:text-sm">
              ✅ SSC - 78% from Sacred Heart High School
            </div>
            <div className="flex gap-2 items-center text-[#cacaca] text-xs md:text-sm">
              ✅ Web Development Certification from Excel Technical Institute
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    (<div className="w-full">
      <Timeline data={data} />
    </div>)
  );
}
