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
  <div className="flex flex-col p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition duration-300 border border-gray-100 h-full">
    <div className="flex items-start space-x-3 mb-4">
      <span className="text-3xl text-emerald-600 shrink-0">{icon}</span>
      <div className="flex-1">
        <h4 className="font-bold text-xl text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <p className="text-sm font-medium text-emerald-700">
          {technologies}
        </p>
      </div>
    </div>

    <div className="mt-auto flex gap-4 pt-4 border-t border-gray-100">
      {liveUrl && (
        <Link
          href={liveUrl}
          target="_blank"
          className="flex items-center gap-1.5 text-emerald-700 hover:text-emerald-900 font-medium transition"
        >
          <ExternalLink size={16} />
          Live Demo
        </Link>
      )}
      {repoUrl && (
        <Link
          href={repoUrl}
          target="_blank"
          className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 font-medium transition"
        >
          <Github size={16} />
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
    username: "apox-rider",
  };
  const fullName = `${infor.firstName} ${infor.middleName} ${infor.surName}`;

  const folderIcon = <FolderGit2 />;

  // You can expand this array with your real projects
  const projects = [
    {
      title: "Cosmic Platform Core",
      description:
        "The main web application powering Cosmic — secure user dashboard, real-time features and admin tools.",
      technologies: "Next.js 14 • TypeScript • Tailwind • Node.js • MongoDB • WebSockets",
      liveUrl: "https://cosmic.example.com",
      repoUrl: "https://github.com/apox-rider/cosmic-core",
    },
    {
      title: "Advanced Authentication Service",
      description:
        "Reusable auth module with OAuth 2.0, JWT, magic links, role-based access control and session management.",
      technologies: "Express • TypeScript • Redis • OAuth providers • Argon2",
      repoUrl: "https://github.com/apox-rider/auth-service",
    },
    {
      title: "Performance Dashboard",
      description:
        "Internal analytics tool showing Lighthouse scores, Core Web Vitals and optimization suggestions.",
      technologies: "React • Chart.js • Vercel Analytics • Next.js API Routes",
      liveUrl: "https://perf.cosmic.example.com",
    },
    {
      title: "Real-time Chat Module",
      description:
        "Feature-rich chat system used across Cosmic products with typing indicators, read receipts and file sharing.",
      technologies: "Socket.io • Next.js • Prisma • PostgreSQL • Tailwind",
      repoUrl: "https://github.com/apox-rider/realtime-chat",
    },
    {
      title: "Dockerized Microservices Boilerplate",
      description:
        "Production-ready template for spinning up scalable Node.js services with Docker Compose & CI/CD.",
      technologies: "Docker • Node.js • Express • TypeScript • Jest",
      repoUrl: "https://github.com/apox-rider/docker-node-boilerplate",
    },
    {
      title: "Personal Portfolio (this site!)",
      description:
        "My own portfolio built with modern Next.js practices, great Lighthouse score and clean architecture.",
      technologies: "Next.js App Router • Tailwind CSS • TypeScript • Vercel",
      liveUrl: "https://avith.dev",
      repoUrl: "https://github.com/apox-rider/portfolio",
    },
  ];

  return (
    <>
      <Navbar />
      <div id="temple-bg" className="absolute inset-0"></div>
      <main className="min-h-screen relative z-10 flex h-full items-center justify-center bg-gradient-to-r from-blue-400 to-gray-800 opacity-100">
        <div className="container mx-auto px-6 lg:px-12 py-20">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-2 font-serif">My Projects</h1>
            <p className="text-xl text-orange-800">
              Selected works that demonstrate technical depth and real-world impact at {company}
            </p>
            <Link href="/" className="text-lg text-emerald-900 hover:underline mt-4 inline-block font-medium">
              ← Back to Home Page
            </Link>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
            {/* Sidebar – similar style and content tone */}
            <div className="md:col-span-1 space-y-8 top-20 p-6 bg-white rounded-xl shadow-xl border-t-4 border-emerald-600">
              <h2 className="text-2xl font-bold text-gray-800">Project Principles</h2>

              <p className="text-gray-700">
                As a {infor.role}, I build projects that are scalable, secure, and delightful to use. Every line of
                code is written with performance, maintainability, and user trust in mind.
              </p>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600 font-bold">✓</span> TypeScript end-to-end
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600 font-bold">✓</span> Modern Next.js (App Router + Server Components)
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600 font-bold">✓</span> Emphasis on security & data integrity
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-600 font-bold">✓</span> Optimized for speed (Lighthouse 95+)
                </li>
              </ul>

              <Link href={infor.gitHub + "?tab=repositories"}>
                <button className="w-full bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:bg-emerald-700 transition duration-300">
                  View All Projects on GitHub
                </button>
              </Link>
            </div>

            {/* Main projects grid */}
            <div className="md:col-span-2 space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

              {/* Optional call-to-action at bottom */}
              <div className="text-center mt-12">
                <p className="text-lg text-gray-700 mb-6">
                  Want to see more? I'm always working on something new.
                </p>
                <Link
                  href={infor.gitHub}
                  className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-900 transition"
                >
                  <Github size={20} />
                  Explore GitHub Repositories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;