import React from 'react';

export default function MyName() {
    return (
        <div className="">
            <div className=" flex font-sans flex-col justify-center items-start mx-8 sm:px-12 md:px-20 sm:py-20 pt-24 pb-[4.5rem]" id='homeId'>
                <p className="text-base sm:text-xl sm:mt-16 mt-8 font-mono  text-purple-600">
                    Hi, my name is
                </p>
                <h1 className="text-[#cacaca] font-sans lg:text-[4.5rem] md:text-[4rem] text-[2.5rem] font-bold m-0">
                    Sainesh Patil.
                </h1>
                <h1 className="text-[#808080] lg:text-[3.2rem] md:text-[2.7rem] text-[2rem] font-bold lg:leading-[4rem] md:leading-[3.5rem] leading-[2.8rem]">
                    Transforming Ambitions into Responsive Web Solutions.
                </h1>
                <p className="mt-6 text-[#cacaca] sm:text-[1.1rem] text-base sm:leading-[2rem] leading-[1.5rem] max-w-2xl">
                    Hey, I&apos;m a <span className="text-[#8e2de2] font-mono">full-stack web developer</span> specializing in the{" "}
                    <span className="text-[#8e2de2] font-mono">MERN</span> stack. I&apos;ve got the skills to handle both ends of the
                    spectrum, from <span className="text-[#8e2de2] font-mono">front-end</span> to{" "}
                    <span className="text-[#8e2de2] font-mono">back-end</span>. Currently on the lookout for opportunities where I
                    can put my expertise to good use and be a part of something meaningful.
                </p>
            </div>
        </div>
    );
}
