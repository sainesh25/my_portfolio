import React from 'react';

export default function MyName() {
    return (
        <div className="">
            <div className=" flex font-sans flex-col justify-center items-start px-8 sm:px-12 md:px-20 py-20" id='homeId'>
                <p className="text-lg sm:text-xl mt-16 font-mono  text-purple-600">
                    Hi, my name is
                </p>
                <h1 className="text-[#cacaca] font-sans lg:text-[4.5rem] font-bold m-0">
                    Sainesh Patil.
                </h1>
                <h1 className="text-[#808080] lg:text-[3.2rem] font-bold leading-[4rem]">
                    Transforming Ambitions into Responsive Web Solutions.
                </h1>
                <p className="mt-6 text-[#cacaca] sm:text-[1.1rem] leading-[2rem] max-w-2xl">
                    Hey, I'm a <span className="text-[#8e2de2] font-mono">full-stack web developer</span> specializing in the{" "}
                    <span className="text-[#8e2de2] font-mono">MERN</span> stack. I've got the skills to handle both ends of the
                    spectrum, from <span className="text-[#8e2de2] font-mono">front-end</span> to{" "}
                    <span className="text-[#8e2de2] font-mono">back-end</span>. Currently on the lookout for opportunities where I
                    can put my expertise to good use and be a part of something meaningful.
                </p>
            </div>
        </div>
    );
}
