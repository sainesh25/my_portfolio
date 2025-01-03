'use client'

import { Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
})

export default function Skills() {
  const frontendSkills = ["JavaScript", "React.js", "Bootstrap", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "jQuery", "WordPress"]
  const backendSkills = ["Node.js", "Express.js"]
  const tools = ["Git", "Fork", "GitLab", "GitHub", "Termius", "Postman"]

  return (
    <div className="py-8 px-4 md:px-8 flex flex-col items-center" id="skillId">
      <h2 className="text-[#cacaca] font-bold text-2xl md:text-4xl text-center mb-8">
        What I am Good at ?
      </h2>
      
      <div className="text-center">
        <h2 className={`font-mono text-lg font-bold md:text-xl text-[#cacaca] mb-4`}>
          Frontend Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-8">
          {frontendSkills.map((item, index) => (
            <div
              key={index}
              className={`
                font-mono
                bg-gradient-to-r from-[#8e2de2] to-[#4a00e0]
                text-white font-semibold
                px-4 py-2 md:px-6 md:py-2
                rounded-full text-sm md:text-base
                shadow-[1px_1px_30px_#8e2de2]
              `}
            >
              {item}
            </div>
          ))}
        </div>

        <h2 className={`font-mono text-lg md:text-xl font-bold text-[#cacaca] mb-4`}>
          Backend Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-8">
          {backendSkills.map((item, index) => (
            <div
              key={index}
              className={`
                font-mono
                bg-gradient-to-r from-[#8e2de2] to-[#4a00e0]
                text-white font-semibold
                px-4 py-2 md:px-6 md:py-2
                rounded-full text-sm md:text-base
                shadow-[1px_1px_30px_#8e2de2]   
              `}
            >
              {item}
            </div>
          ))}
        </div>

        <h2 className={`font-mono text-lg md:text-xl font-bold text-[#cacaca] mb-4`}>
          Database Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-8">
          <div
            className={`
              font-mono
              bg-gradient-to-r from-[#8e2de2] to-[#4a00e0]
              text-white font-semibold
              px-4 py-2 md:px-6 md:py-2
              rounded-full text-sm md:text-base
              shadow-[1px_1px_30px_#8e2de2]
            `}
          >
            MongoDB
          </div>
        </div>

        <h2 className={`font-mono text-lg md:text-xl font-bold text-[#cacaca] mb-4`}>
          Tools
        </h2>
        <div className="flex flex-wrap justify-center gap-2 md:gap-6">
          {tools.map((item, index) => (
            <div
              key={index}
              className={`
                font-mono
                bg-gradient-to-r from-[#8e2de2] to-[#4a00e0]
                text-white font-semibold
                px-4 py-2 md:px-6 md:py-2
                rounded-full text-sm md:text-base
                shadow-[1px_1px_30px_#8e2de2]
                
                
              `}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

