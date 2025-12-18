import React from 'react';
import Link from 'next/link';
import { ToolCase ,Backpack , TextSearchIcon } from 'lucide-react';
import Footer from '@/Components/Footer/footer';

 
interface SkillItemProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, name, description }) => (
    <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition duration-300 border border-gray-100">
        <span className="text-2xl text-emerald-600 shrink-0">{icon}</span>
        <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    </div>
);


const SkillsPage = () => {
    const company="Cosmic"
    const infor={
            firstName:"Avith",
            middleName:"Rwegoshora",
            surName:"Apolinary",
            gitHub:"https://github.com/apox-rider",
            image:"https://github.com/apox-rider.png",
            email:"apolinaryavith@gmail.com",
            role:"Co-Founder and FullStack Developer at " + company,
            username:"apox-rider"
        }
  const fullName=infor.firstName + " " + infor.middleName + " " + infor.surName;
  const tool=<ToolCase/>
  const back=<Backpack/>
  const test=<TextSearchIcon/>
    return (

        <main className="bg-gray-500 min-h-screen py-20">
            <div className="container mx-auto px-6 lg:px-12">

                <header className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-2 font-serif">My Tech Speciality</h1>
                    <p className="text-xl text-orange-800">The core technologies and strategic mastery that drive Cosmic to it's development.</p>
                    <Link href="/" className="text-lg text-emerald-900 hover:underline mt-4 inline-block font-medium">
                        ← Back to Home Page
                    </Link>
                </header>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
                    

                    <div className="md:col-span-1 space-y-8  top-20 p-6 bg-white rounded-xl shadow-xl border-t-4 border-emerald-600">
                        <h2 className="text-2xl font-bold text-gray-800">The Architect's Toolkit</h2>
                        
                        <p className="text-gray-700">
                            As a {infor.role}, my focus is on the advancing technology advancements to further push {company}'s adoption to the present and very modern technology without breeching it's secure spot in security , integrity preserving our user's trust . I don&apos;t just use tools; I master the right tools for scalable, maintainable, and high-performance applications.
                        </p>
                        
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center space-x-2"><span className="text-emerald-600 font-bold">✓</span> Expertise in the Emerging and useful Tech Stack.</li>
                            <li className="flex items-center space-x-2"><span className="text-emerald-600 font-bold">✓</span> Strict adherence to TypeScript for type safety.</li>
                            <li className="flex items-center space-x-2"><span className="text-emerald-600 font-bold">✓</span> Cloud-native deployment via Docker and Vercel.</li>
                            <li className="flex items-center space-x-2"><span className="text-emerald-600 font-bold">✓</span> Focus on Lighthouse performance optimization.</li>
                        </ul>
                        
                        <Link href="https://github.com/apox-rider?tab=repo">
                            <button className="w-full bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:bg-emerald-700 transition duration-300">
                                See Skills in Action (Projects)
                            </button>
                        </Link>
                    </div>


                    <div className="md:col-span-2 space-y-10">
                        

                        <div>
                            <h3 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-2">Frontend & UI/UX</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <SkillItem icon={tool} name="React.js" description="Expert level component-based architecture and custom hooks." />
                                <SkillItem icon={tool} name="Next.js" description="Mastery of App Router, Server Components, and Routing strategies." />
                                <SkillItem icon={tool} name="Tailwind CSS" description="Highly efficient utility-first styling for complex, responsive designs." />
                                <SkillItem icon={tool} name="UI/UX Principles" description="Building interfaces focused on accessibility and intuitive user journeys." />
                            </div>
                        </div>


                        <div>
                            <h3 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-2">Backend & APIs</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <SkillItem icon={back} name="Node.js & Express" description="Designing and implementing secure, high-throughput RESTful APIs." />
                                <SkillItem icon={back} name="TypeScript" description="End-to-end type safety from database models to the frontend." />
                                <SkillItem icon={back} name="Authentication" description="JWT implementation, OAuth 2.0 flows, and session management." />
                                <SkillItem icon={back} name="WebSockets" description="Real-time communication for dynamic, interactive applications." />
                            </div>
                        </div>


                        <div>
                            <h3 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-2">Data, Testing & DevOps</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <SkillItem icon={test} name="MongoDB" description="Advanced indexing, aggregation pipelines, and schema design." />
                                <SkillItem icon={test} name="Docker" description="Containerization for consistent and reliable development and deployment." />
                                <SkillItem icon={test} name="Git/GitHub" description="Complex branching strategies (Gitflow) and code reviews." />
                                <SkillItem icon={test} name="Jest / React Testing" description="Unit, integration, and E2E testing for robust applications." />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </main>
    );
}

export default SkillsPage;