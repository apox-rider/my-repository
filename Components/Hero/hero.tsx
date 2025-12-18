import React from 'react';
import Image from 'next/image';

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
        <section className="min-h-screen flex items-center bg-gray-500 py-20">
  
          <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">


          <div className="order-2 md:order-1 text-center md:text-left space-y-8">
      

      <div className="space-y-2">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black-900 leading-tight">
           {fullName.toUpperCase()}
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-emerald-900">
           {infor.role}
        </h2>
      </div>


      <div className="text-lg text-red-900 space-y-4">
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


      <div className="pt-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 md:text-left text-center">Core Tech Stack:</h3>
        <div className="flex flex-wrap justify-center md:justify-start gap-6">
         <div className="p-3 bg-amber-500 rounded-full shadow-md"> React</div>
          <div className="p-3 bg-amber-500 rounded-full shadow-md">⚡ Next.js</div>
          <div className="p-3 bg-amber-500 rounded-full shadow-md"> Node.js</div>
          <div className="p-3 bg-amber-500 rounded-full shadow-md"> TypeScript</div>
          <div className="p-3 bg-amber-500 rounded-full shadow-md"> Tailwind CSS</div>
          <div className="p-3 bg-amber-500 rounded-full shadow-md">Docker</div>
        </div>
      </div>
      

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-8 justify-center md:justify-start">
        <button className="bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg shadow-xl hover:bg-emerald-700 transition duration-300 transform hover:scale-105">
          <a href='https://github.com/apox-rider?tab=repo'>View Featured Projects</a>
        </button>
        <button className="border border-gray-300 text-gray-800 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
          <a href=' https://www.linkedin.com/in/avith-apolinary-52a651396?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>Connect on LinkedIn</a>
        </button>
      </div>
      
    </div>

    <div className="order-1 md:order-2 flex justify-center">
      <img
        className="rounded-full object-cover shadow-2xl border-4 border-emerald-500 w-80 h-80 lg:w-96 lg:h-96 transform hover:scale-105 transition duration-500"
        src= {infor.image}
        alt="my github profile"
        width={400}
        height={400}
      />
    </div>

  </div>
</section>
    );
}

export default Hero;
