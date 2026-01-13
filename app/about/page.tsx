import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { Si30Secondsofcode, SiCsdn, SiFreecodecamp, SiReact } from 'react-icons/si';
import Navbar from '@/Components/Header/navbar';
import Footer from '@/Components/Footer/footer';

const AboutPage = () => {
  const company = 'Cosmic';
  const infor = {
    firstName: 'Avith',
    middleName: 'Rwegoshora',
    surName: 'Apolinary',
    gitHub: 'https://github.com/apox-rider',
    image: 'https://github.com/apox-rider.png',
    email: 'apolinaryavith@gmail.com',
    role: `Co-Founder and FullStack Developer at ${company}`,
  };
  const fullName = `${infor.firstName} ${infor.middleName} ${infor.surName}`;

  return (
    <>
    <Navbar/>
    <div className="relative ">
        <div id="temple-bg" className="absolute inset-0 "></div>

        <div className="relative z-10 bg-temple-pattern bg-base-purple min-h-screen bg-repeat bg-size-[152px_152px]  inset-0 bg-linear-to-r from-gray-900 to-gray-800opacity-100  ">
          <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24">

            <header className="text-center mb-16 md:mb-20">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-linear-to-r from-emerald-800 via-emerald-700 to-teal-800 bg-clip-text text-transparent leading-none mb-4">
                ABOUT ME
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-emerald-400/90 tracking-wide">
                {fullName} — Curious Builder, Artist & Full-Stack Developer
              </p>
              
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

              <div className="lg:col-span-7 space-y-12 order-2 lg:order-1">

                <section className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-7 md:p-9 shadow-xl">
                  <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
                    From Curiosity to Creation
                  </h2>
                  <div className="space-y-5 text-lg leading-relaxed text-gray-300">
                    <p>
                      My journey into technology started with pure wonder — I was endlessly curious about how computers and the digital world actually work. Every click, every animation, every game felt like magic I needed to understand. That childlike curiosity never left; it became the fuel that turned me into a full-stack developer.
                    </p>
                    <p>
                      Today I build modern web applications at <span className="text-emerald-400 font-semibold">{company}</span> — but I still approach every project with the same excitement: asking “how can I make this better, faster, more beautiful?”
                    </p>
                  </div>
                </section>


                <section className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-6">Education Journey</h3>
                  <div className="space-y-6">
                    {[
                      {
                        period: 'Nursery',
                        school: 'Amani Boarding School',
                        note: 'Early years of exploration and creativity',
                      },
                      {
                        period: 'Primary (2017–2020)',
                        school: 'Adolph Kolping Society of Tanzania',
                        note: 'Where I fell deeply in love with drawing and visual storytelling',
                      },
                      {
                        period: 'Secondary (2021–2024)',
                        school: 'Kemebos Secondary School',
                        note: 'Continued artistic passion while discovering computers',
                      },
                      {
                        period: 'College (2025 – present)',
                        school: 'Mbeya University of Science and Technology (MUST)',
                        note: 'Formal studies in technology while actively building real-world projects',
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6 hover:border-emerald-600/50 transition-colors group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-3 h-3 rounded-full bg-emerald-500 group-hover:bg-teal-400 transition-colors" />
                          <div>
                            <h4 className="font-semibold text-xl text-white">{item.period}</h4>
                            <p className="text-emerald-400/90">{item.school}</p>
                            <p className="text-gray-400 mt-1 text-sm italic">{item.note}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>


                <section className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-7 md:p-9 shadow-xl">
                  <h3 className="text-3xl font-bold bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
                    Self-Taught Developer Path
                  </h3>
                  <div className="space-y-5 text-lg text-gray-300">
                    <p>
                      Alongside formal education, I dove deep into online learning:  CS50, freeCodeCamp, W3Schools, YouTube tutorials, documentation crawls — anything I could find. Every concept I learned came from relentless curiosity and hands-on experimentation.
                    </p>
                    <p>
                      This path taught me that real mastery comes from <strong>building</strong>, breaking things, fixing them, and asking “what if…?” — not just watching videos.
                    </p>
                    <div className="pt-4 border-t border-gray-700/50">
                      <h4 className="text-xl font-semibold text-emerald-300 mb-3">A piece of advice to fellow developers:</h4>
                      <blockquote className="italic text-gray-200 border-l-4 border-emerald-600 pl-5 py-1">
                        Don’t wait to feel “ready”. Start building small projects today — even if they’re ugly or broken. Curiosity + consistent action beats perfect planning every time. The best way to learn is to ship, receive feedback, iterate, repeat.
                      </blockquote>
                    </div>
                  </div>
                </section>
              </div>


              <div className="lg:col-span-5 space-y-10 order-1 lg:order-2">

                <div className="flex justify-center lg:justify-end">
                  <div className="relative group">
                    <img
                      src={infor.image}
                      alt="Avith Apolinary"
                      width={320}
                      height={320}
                      className="rounded-2xl object-cover shadow-2xl border-4 border-emerald-600/60 group-hover:border-teal-500 transition-all duration-500 transform group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-emerald-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>


                <section className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-7 md:p-9 shadow-xl">
                  <h3 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
                    Beyond Code — Creative Passions
                  </h3>
                  <p className="text-lg text-gray-300 mb-6">
                    While programming is my profession, art remains my oldest love. I spend many hours sketching, drawing digitally, and occasionally painting — exploring shapes, colors, and emotions in ways that often inspire cleaner UI designs and more intuitive user flows.
                  </p>


                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="aspect-square rounded-xl overflow-hidden border border-emerald-700/40 shadow-md hover:shadow-xl hover:scale-[1.04] transition-all">

                      <div className="w-full h-full bg-linear-to-br from-purple-900/60 to-teal-900/60 flex items-center justify-center text-4xl text-teal-300/50">
                        🎨
                      </div>
                    </div>
                    <div className="aspect-square rounded-xl overflow-hidden border border-emerald-700/40 shadow-md hover:shadow-xl hover:scale-[1.04] transition-all">
                      <div className="w-full h-full bg-linear-to-br from-emerald-900/60 to-indigo-900/60 flex items-center justify-center text-4xl text-emerald-300/50">
                        ✏️
                      </div>
                    </div>
                  </div>
                </section>


                <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-end pt-4">
                  <Link
                    href={infor.gitHub}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-base font-bold text-white bg-linear-to-r from-emerald-600 to-teal-600 rounded-xl shadow-lg hover:from-emerald-500 hover:to-teal-500 hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
                  >
                    <FaGithub className="text-xl" />
                    GitHub
                  </Link>
                  <Link
                    href="/contacts"
                    className="inline-flex items-center justify-center px-7 py-3.5 text-base font-bold border-2 border-emerald-600/60 text-emerald-400 rounded-xl hover:bg-emerald-950/30 hover:border-emerald-500 hover:shadow-lg transition-all duration-300"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer/>
    </>
  );
};

export default AboutPage;