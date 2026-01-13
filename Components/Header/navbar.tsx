'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

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
    <header className="sticky top-0 z-50 w-full bg-linear-to-r from-gray-900 to-gray-800 text-gray-300 shadow-lg border-b border-gray-700/50 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        

        <Link 
          href="/" 
          className="flex items-center gap-3 group transition-all duration-300 hover:opacity-90"
        >
          <div className="relative">
            <img
              src={infor.image}
              alt="Profile Photo"
              width={48}
              height={48}
              className=" animate-spin [animation-duration:6s] rounded-full object-cover border-2 border-emerald-500/70 shadow-md group-hover:border-emerald-400 transition-colors duration-300"
            />

            <div className="absolute inset-0 rounded-full border-2 border-emerald-500/30 animate-pulse-slow pointer-events-none" />
          </div>
          
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg sm:text-xl text-white tracking-wide">
              {fullName.toUpperCase()}
            </span>
            <span className="text-xs sm:text-sm text-emerald-400/80 font-medium">
              {company}
            </span>
          </div>
        </Link>


        <div className="flex items-center gap-8 text-sm sm:text-base font-medium">
          <Link 
            href="/" 
            className="hover:text-emerald-400 transition-colors duration-200 hover:underline underline-offset-4"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="hover:text-emerald-400 transition-colors duration-200 hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link 
            href="/projec" 
            className="hover:text-emerald-400 transition-colors duration-200 hover:underline underline-offset-4"
          >
            Projects
          </Link>
          <Link 
            href="/skills" 
            className="hover:text-emerald-400 transition-colors duration-200 hover:underline underline-offset-4"
          >
            Skills
          </Link>
        </div>


        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={() => router.push('/contacts')}
            className="
              bg-linear-to-r from-emerald-600 to-emerald-700 
              text-white font-semibold 
              px-5 py-2.5 rounded-lg 
              shadow-md hover:shadow-lg 
              hover:from-emerald-500 hover:to-emerald-600 
              transition-all duration-300 transform hover:scale-105
            "
          >
            Contact
          </button>

 
        </div>
      </nav>
    </header>
  );
};

export default Navbar;