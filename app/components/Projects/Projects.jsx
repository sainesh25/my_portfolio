'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuExternalLink } from "react-icons/lu";
import { CiFolderOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <div className='py-16 px-4 sm:mx-20 mx-4 sm:px-6 lg:px-8 my-8' id='projectId'>
            <h1 className='sm:text-3xl text-2xl font-bold mb-8 text-center text-white'>Some things I have built...</h1>
            <h2 className='sm:text-2xl text-xl font-semibold mb-6 text-center text-[#aaa]'>Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {featuredProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className='flex'
                    >
                        <FeaturedProjectCard key={index} {...project} />
                    </motion.div>
                ))}
            </div>

            <h2 className='text-2xl font-semibold mt-12 mb-6 text-center text-[#aaa]'>Other Noteworthy Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        // animate={{}}
                        transition={{
                            duration: 1,
                            delay: index * 0.1,
                            ease: "easeInOut"
                        }}
                        viewport={{ once: true }}
                        className='flex'
                    >
                        <ProjectCard key={index} {...project} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

const FeaturedProjectCard = ({ title, description, technologies, githubLink }) => (
    <div className="bg-[#272727] w- text-[#c5c5c5] p-6 rounded-lg border border-[#aaaaaa81] transition-all flex-grow duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-[1px_1px_30px_#aaaaaa46]">
        <p className='text-[#ac54ff] font-mono text-sm mb-2'>Featured Project</p>
        <h2 className='text-xl font-bold mb-4'>{title}</h2>
        <div className="project-info">
            <p className='text-sm mb-4'>{description}</p>
            <div className="flex flex-wrap justify-end mb-4">
                {technologies.map((tech, index) => (
                    <p key={index} className='text-xs font-mono mr-2 mb-2'>{tech}</p>
                ))}
            </div>
            <div className="flex justify-end">
                <Link href={githubLink} target="_blank" rel="noopener noreferrer" className="transition-all duration-300 ease-in-out hover:text-[#ac54ff]">
                    <FiGithub
                        className="w-5 h-5" />
                </Link>
            </div>
        </div>
    </div>
)

const ProjectCard = ({ title, description, technologies, githubLink, liveLink }) => (
    <div className="bg-[#272727] text-[#c5c5c5] p-6 rounded-lg border border-[#aaaaaa81] transition-all flex-grow duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-[1px_1px_30px_#aaaaaa46]">
        <div className='flex justify-between items-center mb-4'>
            <CiFolderOn className="w-12 h-12 text-[#ac54ff]" />
            <div className="flex space-x-4 items-center">
                <Link href={githubLink} target="_blank" rel="noopener noreferrer" className="transition-all duration-300 ease-in-out hover:text-[#ac54ff]">
                    <FiGithub
                        className="w-5 h-5" />
                </Link>
                <Link href={liveLink} target="_blank" rel="noopener noreferrer" className="transition-all duration-300 ease-in-out hover:text-[#ac54ff]">
                    <LuExternalLink className="w-6 h-6" />
                </Link>
            </div>
        </div>
        <h3 className='text-lg font-semibold mb-2'>{title}</h3>
        <p className='text-sm mb-4'>{description}</p>
        <div className="flex flex-wrap">
            {technologies.map((tech, index) => (
                <p key={index} className='text-xs font-mono mr-2 mb-2'>{tech}</p>
            ))}
        </div>
    </div>
)

const featuredProjects = [
    {
        title: "School Management System",
        description: "This is a web application that allows the admin to manage the data of teachers by doing all the CRUD operations. The data is displayed in table format. And the data is taken through a form.",
        technologies: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB", "Bootstrap"],
        githubLink: "https://github.com/sainesh25/School_Management_System.git"
    },
    {
        title: "Savings Calculator",
        description: "The React-based web app enables users to track income and expenses, offering a simple interface for inputting financial transactions. It dynamically calculates and displays total income, expenses, and savings, providing users with a quick and efficient way to manage their finances.",
        technologies: ["ReactJs", "Tailwind CSS"],
        githubLink: "https://github.com/sainesh25/savings_calculator.git"
    },
    {
        title: "Portfolio",
        description: "Showcasing a diverse range of innovative projects, this React-based portfolio demonstrates my skills in web development, problem-solving, and creative design. Explore my journey and the impactful solutions I've developed.",
        technologies: ["Next.js", "Tailwind CSS"],
        githubLink: "https://github.com/sainesh25/my_portfolio"
    },
    {
        title: "Weather Application",
        description: "The Weather App is a responsive and user-friendly application developed with React.js. It provides real-time weather information for any city, offering a seamless user experience.",
        technologies: ["ReactJs", "OpenWeatherMap_API"],
        githubLink: "https://github.com/sainesh25/weather_app"
    }
];

const otherProjects = [
    {
        title: "Quote Generator",
        description: "Designed a brief quote generator with copy-to-clipboard functionality. Users can easily generate and share quotes on Twitter, enhancing accessibility and user experience.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        githubLink: "https://github.com/sainesh25/quote-generator.git",
        liveLink: "https://quote-generator-by-saineshp.netlify.app/"
    },
    {
        title: "Tip Calculator",
        description: "Developed interactive features for a web-based tip calculator, including dynamic adjustments for tip and GST percentages, real-time calculations, and a split bill feature.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        githubLink: "https://github.com/sainesh25/tip_calculator.git",
        liveLink: "https://tip-calculator-by-saineshp.netlify.app/"
    },
    {
        title: "To Do List",
        description: "Created a streamlined to-do list feature with an intuitive interface. Users can add, delete, and mark tasks as done, enhancing task management and user experience.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        githubLink: "https://github.com/sainesh25/to-do-list.git",
        liveLink: "https://to-do-list-by-saineshp.netlify.app/"
    },
    {
        title: "Aadhar Card Registration Form",
        description: "The JavaScript code validates Aadhar form inputs, displaying custom error messages. It ensures data accuracy and requires agreement to terms for successful submission.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        githubLink: "https://github.com/sainesh25/aadhar-card-form-registration.git",
        liveLink: "https://aadhar-form-registration-by-saineshp.netlify.app/"
    },
    {
        title: "Olla-agency Home page",
        description: "This is a static responsive web page created using HTML5 tags and CSS3 properties.",
        technologies: ["HTML5", "CSS3"],
        githubLink: "https://github.com/sainesh25/olla-agency-homepage-static.git",
        liveLink: "https://olla-agency-static.netlify.app/"
    },
    {
        title: "Rolax Resort Home page",
        description: "This is a static responsive web page created using HTML5 tags and CSS3 properties.",
        technologies: ["HTML5", "CSS3"],
        githubLink: "https://github.com/sainesh25/rolaxResort-homepage.git",
        liveLink: "https://rolax-resort-static.netlify.app/"
    },
    {
        title: "Landscaper Home page",
        description: "This is a static responsive web page created using HTML5 tags and CSS3 properties.",
        technologies: ["HTML5", "CSS3"],
        githubLink: "https://github.com/sainesh25/landscaper-static-page.git",
        liveLink: "https://landscaper-static.netlify.app/"
    },
    {
        title: "Water Boat Home page",
        description: "This is a static responsive web page created using HTML5 tags and CSS3 properties.",
        technologies: ["HTML5", "CSS3"],
        githubLink: "https://github.com/sainesh25/water-boat-static.git",
        liveLink: "https://water-boat-static.netlify.app/"
    }
];

