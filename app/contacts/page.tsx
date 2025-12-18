"use client";   
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Link2, Mail, Phone, Store } from 'lucide-react';
import emailjs from '@emailjs/browser'





const ContactForm: React.FC = () =>{
        const form = useRef<HTMLFormElement>(null);
        const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
        
        const sendEmail=(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (!form.current) return;
            setStatus("sending");
            
            const SERVICE_ID=process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
            const TEMPLATE_ID=process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
            const PUBLIC_KEY= 'oWFeHT7mXMLkDC9pP'
            
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, 
                {publicKey: PUBLIC_KEY})
                .then(()=>{
                    setStatus('success');
                    form.current?.reset();
                    }, 
                    (error) => {
                    console.error('EmailJS error:',error);
                    setStatus('error');
                    });
                    }

    const company=`Cosmic`                     
    const mail=<Mail/>
    const infor={
        firstName:"Avith",
        middleName:"Rwegoshora",
        surName:"Apolinary",
        gitHub:"https://github.com/apox-rider",
        image:"https://github.com/apox-rider.png",
        email:"apolinaryavith@gmail.com",
        role:"Co-Founder and FullStack Developer at " + company,
    }
const fullName=infor.firstName + " " + infor.middleName + " " + infor.surName;
    
    return (
        <form ref={form} onSubmit={sendEmail} className="space-y-6"  >
            <h3 className="text-2xl font-bold text-gray-900">Send Me a Message</h3>
            
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="mt-1 block w-full px-4 py-3 border border-gray-400 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 transition duration-150"
                    placeholder="Your Name"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="mt-1 block w-full px-4 py-3 border border-gray-400 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 transition duration-150"
                    placeholder="you@example.com"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
                <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    required 
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 transition duration-150"
                    placeholder="Tell me about your project or opportunity..."
                />
            </div>
            
            <button 
                type="submit" 
                disabled= {status === 'sending'}
                className="w-full bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-emerald-700 transition duration-300 transform hover:scale-[1.01]"
            >
                 {status==='sending' ? 'Sending...' : 'Send Message'}
            </button>
             {status === 'success' && (
                <p className="text-emerald-600 font-medium text-center bg-emerald-50 py-2 rounded">Message sent successfully!</p>
            )}
            {status === 'error' && (
                <p className="text-red-600 font-medium text-center bg-red-50 py-2 rounded">Something went wrong. Please try again.</p>
            )}
        </form>
    );
}


interface ContactLinkProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ icon, label, value, href }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:border-emerald-500 transition duration-300"
    >
        <div className="text-3xl text-emerald-600 shrink-0">{icon}</div>
        <div>
            <p className="text-sm font-medium text-gray-500">{label}</p>
            <h4 className="font-semibold text-gray-900 wrap-break-word">{value}</h4>
        </div>
    </a>
);


export default function ContactsPage() {
   const company=`Cosmic`
     const mail=<Mail/>
     const link=<Link2/>
     const call=<Phone/>
     const git=<Store/>
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
    return (
        <main className="bg-gray-500 min-h-screen py-20">
            <div className="container mx-auto px-6 lg:px-12">

                <header className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-2 font-serif"> Wanna build something great? </h1>
                    <p className="text-xl text-red-900">I&apos;m ready to discuss new opportunities, challenging projects, or a role on your team.</p>
                    <Link href="/" className="text-lg text-emerald-900 hover:underline mt-4 inline-block font-medium">
                        ← Back to Home Page
                    </Link>
                </header>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
                    

                    <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl border-t-4 border-b-black">
                        <ContactForm />
                    </div>


                    <div className="space-y-8">
                        
                        <h2 className="text-3xl font-bold text-gray-800">Direct Contact & Socials</h2>
                        <p className="text-lg text-green-900">
                            Feel free to reach out via the form, or connect with me directly on any of these platforms.
                        </p>

                        <div className="space-y-4">

                            <ContactLink 
                                icon={mail} 
                                label="Email" 
                                value= {infor.email}
                                href="mailto:apolinaryavith@gmail.com"
                            />
                            <ContactLink 
                                icon={call}
                                label="WhatsApp" 
                                value="https://wa.link/edmmef" 
                                href="https://wa.link/edmmef"
                            />
                            <ContactLink 
                                icon={link}
                                label="Instagram" 
                                value="https://www.instagram.com/shadowhunter_462" 
                                href="https://www.instagram.com/shadowhunter_462/"
                            />
                            <ContactLink 
                                icon={git} 
                                label="GitHub" 
                                value={infor.username}
                                href={infor.gitHub}
                            />

                        </div>

                        <div className="text-center md:text-left pt-4">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Location</h3>
                            <p className="text-lg text-green-900">Currently based in Dar es Salaam, Tanzania (EAT)</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </main>
    );

}
