import React from 'react';
import Image from 'next/image';
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";
const Hero = () => {
  const company=`Cosmic`
  const infor={
    firstName:"Avith",
    middleName:"Rwegoshora",
    surName:"Apolinary",
    gitHub:"https://github.com/apox-rider",
    image:"https://github.com/apox-rider.png ",
    email:"apolinaryavith@gmail.com",
    role:"Co-Founder and FullStack Developer at " + company,
  }
  const fullName=infor.firstName + " " + infor.middleName + " " + infor.surName;
    return (
      <>
      <div className="relative ">
        <div className="absolute inset-0 bg-temple-pattern bg-base-purple min-h-screen bg-repeat bg-size-[152px_152px]"></div>
        <div id="temple-bg" className="absolute inset-0 "></div>
        <div className=" min-h-screen relative z-10 flex h-full items-center justify-center bg-linear-to-r from-gray-900 to-gray-800opacity-100 ">
  
          <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">


          <div className="order-2 md:order-1 text-center md:text-left space-y-8">
      

      <div className="space-y-3">
      <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-linear-to-r from-emerald-800 via-emerald-700 to-teal-800 bg-clip-text text-transparent leading-none">
        {fullName.toUpperCase()}
      </h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-800 dark:text-emerald-300 tracking-wide">
        {infor.role}
      </h2>
    </div>


      <div className="text-lg text-red-100 space-y-4">
        <p>
          My role is rooted in strategic vision and full-cycle product development. As the Founder, I understand the critical intersection of business goals and technical execution, translating ambitious concepts into highly functional, scalable, and user-centric web applications.
        </p>
        <p>
          My technical foundation is in the modern, high-performance web ecosystem. I leverage Next.js and React for superior frontend architecture, paired with robust backend development using Node.js and Express. I drive quality with TypeScript and ensure deployment consistency with Docker and MongoDB.
        </p>
        <p>
          I deliver a unique blend of executive insight and hands-on technical skill, focused maniacally on scalability, maintainability, and world-class performance.
        </p>
      </div>


      <div className="pt-4">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 md:text-left text-center">
        Core Tech Stack
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-5">
        {[
          { Icon: FaReact, name: "React", color: "from-blue-500/80 to-cyan-500/80" },
          { Icon: RiNextjsFill, name: "Next.js", color: "from-gray-900 to-black/90" },
          { Icon: FaNodeJs, name: "Node.js", color: "from-green-600/80 to-emerald-600/80" },
          { Icon: SiTypescript, name: "TypeScript", color: "from-blue-600/80 to-indigo-600/80" },
          { Icon: RiTailwindCssFill, name: "Tailwind CSS", color: "from-teal-500/80 to-cyan-600/80" },
          { Icon: FaDocker, name: "Docker", color: "from-blue-700/80 to-blue-900/80" },
        ].map(({ Icon, name, color }, i) => (
          <div
            key={name}
            className={`
              group relative flex flex-col items-center gap-2 p-5 rounded-2xl
              bg-linear-to-br ${color}
              text-white font-medium shadow-lg
              hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.04]
              transition-all duration-300 ease-out
              border border-white/10 backdrop-blur-sm
            `}
          >
            <Icon className="w-9 h-9 sm:w-10 sm:h-10 opacity-95 group-hover:opacity-100 transition-opacity" />
            <span className="text-sm sm:text-base font-semibold tracking-wide">{name}</span>
          </div>
        ))}
      </div>
    </div>
      

      <div className=" mb-3.5 flex flex-col sm:flex-row gap-5 pt-8 justify-center md:justify-start">
      <a
        href="https://github.com/apox-rider?tab=repo"
        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-linear-to-r from-emerald-600 to-teal-600 rounded-xl shadow-xl hover:from-emerald-700 hover:to-teal-700 hover:shadow-2xl hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-300"
      >
        View Featured Projects
      </a>
      <a
        href="https://www.linkedin.com/in/avith-apolinary-52a651396?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold border-2 border-emerald-600/70 text-emerald-700 dark:text-emerald-300 rounded-xl hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30 hover:border-emerald-600 hover:shadow-lg transition-all duration-300"
      >
        Connect on LinkedIn
      </a>
    </div>
      
    </div>

    <div className="order-1 md:order-2 flex justify-center">
      <img
        className="animate-pulse rounded-full object-cover shadow-2xl border-4 border-emerald-500 w-80 h-80 lg:w-96 lg:h-96 transform hover:scale-105 transition duration-500"
        src= {infor.image}
        alt="my github profile"
        width={400}
        height={400}
      />
    </div>

  </div>
</div>
</div>
</>
    );
}

export default Hero;
