import React from 'react';
import Link from 'next/link';
import { FolderGit2, ExternalLink, Github } from 'lucide-react';
import Footer from '@/Components/Footer/footer';
import Navbar from '@/Components/Header/navbar';

interface ProjectItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string;
  liveUrl?: string;
  repoUrl?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  icon,
  title,
  description,
  technologies,
  liveUrl,
  repoUrl,
}) => (
  <div
    className={`
      group relative flex flex-col p-6 md:p-8 rounded-2xl
      bg-linear-to-br from-gray-900/90 to-black/80
      text-white shadow-xl border border-white/10 backdrop-blur-sm
      hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03]
      transition-all duration-300 ease-out
    `}
  >
    <div className="flex items-start gap-4 mb-5">
      <span className="text-4xl text-emerald-500 shrink-0 group-hover:text-teal-400 transition-colors">
        {icon}
      </span>
      <div className="flex-1">
        <h4 className="text-2xl font-bold mb-2 tracking-tight">{title}</h4>
        <p className="text-gray-300 mb-4 text-base leading-relaxed">{description}</p>
        <p className="text-sm font-medium text-teal-400 tracking-wide">
          {technologies}
        </p>
      </div>
    </div>

    <div className="mt-auto flex flex-wrap gap-5 pt-5 border-t border-white/10">
      {liveUrl && (
        <Link
          href={liveUrl}
          target="_blank"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-linear-to-r from-emerald-600 to-teal-600 rounded-lg hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg transition-all duration-300"
        >
          <ExternalLink size={18} />
          Live Demo
        </Link>
      )}
      {repoUrl && (
        <Link
          href={repoUrl}
          target="_blank"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold border-2 border-emerald-600/70 text-emerald-400 rounded-lg hover:bg-emerald-950/30 hover:border-emerald-500 hover:shadow-lg transition-all duration-300"
        >
          <Github size={18} />
          Repository
        </Link>
      )}
    </div>
  </div>
);

const ProjectsPage = () => {
  const company = "Cosmic";
  const infor = {
    firstName: "Avith",
    middleName: "Rwegoshora",
    surName: "Apolinary",
    gitHub: "https://github.com/apox-rider",
    image: "https://github.com/apox-rider.png",
    email: "apolinaryavith@gmail.com",
    role: "Co-Founder and FullStack Developer at " + company,
  };
  const fullName = `${infor.firstName} ${infor.middleName} ${infor.surName}`;

  const folderIcon = <FolderGit2 className="w-12 h-12" />;


  const projects = [
    {
      title: "Cosmic Platform Core",
      description:
        "Flagship web application powering Cosmic — secure dashboards, real-time features, admin controls and scalable architecture which aims at boosting up the main thing into transactional relation between people within Africa, aiming for the future world-wide transactional relation making it easy for money to flow in a secure manner.",
      technologies: "Next.js 14 • TypeScript • Tailwind • Node.js • MongoDB • WebSockets",
      liveUrl: "#",
      repoUrl: "https://github.com/apox-rider/frontend-cosmic-repo",
    },
    {
      title: "Civ-Stack Platform Core",
      description:
        "A web platform that dives into interconnecting Civil Engineering to modern digital innovation ensuring sustainability as well as accessibility of modern shelter in which people live. Further more work on the food security and supply as well as cloth and garmet quantity and quality considering the future demands of the people. ",
      technologies: "Express • TypeScript • Redis • OAuth • Argon2",
      repoUrl: "https://github.com/apox-rider/civ_stack",
    },
    {
      title: "AI ",
      description:
      " I'm building a lightweight, friendly AI chatbot designed for normal everyday conversations and practical daily use — still in the very early stages.What it does (simple version):You type or (eventually) speak normal messages like you would to a friend or helper → the bot understands casual language and replies in a natural, helpful, non-robotic way → useful for quick chats, asking questions, getting reminders, casual banter, explaining things simply, or just passing time.",
      technologies: "Python",
      repoUrl: "https://github.com/apox-rider/AI",
    },
    {
      title: "Online diary",
      description:
      " Your private space for life's moments. Write whatevers on your mind — dreams, reflections, people who matter, little details worth remembering — all safely tucked away. When the time feels right, share a single memory or page with friends, family, or loved ones through a simple, secure link that only they can access. Your diary, your rules.",
      technologies: "Typescript • Node.js  • Javascript • Supabase ",
      repoUrl: "https://github.com/apox-rider/me_ppo",
    },
    {
      title: "Personal Portfolio v2",
      description:
      "This very site — modern Next.js architecture, excellent performance scores, clean code structure and elegant design.",
      technologies: "Next.js App Router • Tailwind CSS • TypeScript • Vercel",
      liveUrl: "https://my-repository-lac-six.vercel.app",
      repoUrl: "https://github.com/apox-rider/my-repository",
    },
    {
      title: "Other Simple Projects",
      description:
        "Simple projects of sample web pages , to-do-lists and other minor projects ",
      technologies: "React • Chart.js • Vercel Analytics • Next.js API • Python",
      repoUrl: "https://github.com/apox-rider",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="relative ">
        <div className="absolute inset-0 bg-temple-pattern bg-base-purple bg-repeat bg-size-[152px_152px]"></div>
        <div id="temple-bg" className="absolute inset-0"></div>
        <div className=" min-h-screen relative z-10 flex h-full items-center justify-center bg-linear-to-r from-gray-900 to-gray-800opacity-100 ">
          <div className="container mx-auto px-6 lg:px-12 py-20">
            <header className="text-center mb-16 md:mb-20">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-linear-to-r from-gray-900 via-gray-900 to-gray-800 bg-clip-text text-transparent leading-none mb-3">
                PROJECTS
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-emerald-800 tracking-wide">
                Selected works showcasing technical depth & real-world impact at <h1>Cosmic™️</h1>
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              <div className="lg:col-span-5 space-y-10 order-2 md:order-1">
                <div className="space-y-6">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 tracking-tight">
                    How I Build
                  </h2>
                  <div className="text-lg text-gray-200 space-y-5">
                    <p>
                      As {infor.role.toLowerCase()}, every project is approached with strategic clarity and engineering excellence.
                    </p>
                    <p>
                      I create scalable, secure, high-performance systems — blending modern frontend architecture with robust backend design and obsessive attention to detail.
                    </p>
                    <p>
                      Focus remains on maintainability, blazing speed, security posture, and delivering delightful user experiences.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-6">Core Principles</h3>
                  <ul className="space-y-4 text-gray-300 text-lg">
                    <li className="flex items-center gap-3">
                      <span className="text-emerald-500 text-2xl">✓</span>
                      End-to-end TypeScript for rock-solid safety
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-emerald-500 text-2xl">✓</span>
                      Modern Next.js (App Router + Server Components)
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-emerald-500 text-2xl">✓</span>
                      Security-first mindset & data integrity
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-emerald-500 text-2xl">✓</span>
                      Lighthouse 95+ performance obsession
                    </li>
                  </ul>
                </div>

                <div className="pt-6">
                  <Link
                    href={`${infor.gitHub}?tab=repositories`}
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-linear-to-r from-emerald-600 to-teal-600 rounded-xl shadow-xl hover:from-emerald-700 hover:to-teal-700 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 w-full md:w-auto"
                  >
                    View All Projects on GitHub
                  </Link>
                </div>
              </div>


              <div className="lg:col-span-7 order-1 md:order-2 space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                  {projects.map((project, idx) => (
                    <ProjectItem
                      key={idx}
                      icon={folderIcon}
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      liveUrl={project.liveUrl}
                      repoUrl={project.repoUrl}
                    />
                  ))}
                </div>

                <div className="text-center pt-10">
                  <p className="text-xl text-gray-300 mb-6">
                    Always building — more coming soon.
                  </p>
                  <Link
                    href={infor.gitHub}
                    className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-white bg-gray-900 rounded-xl border border-emerald-600/50 hover:bg-gray-800 hover:border-emerald-500 hover:shadow-2xl transition-all duration-300"
                  >
                    <Github size={24} />
                    Explore GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProjectsPage;