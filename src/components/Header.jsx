import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from 'react';

export function Header() {
    const [activeSection, setActiveSection] = useState('');

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
    
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        setActiveSection(currentSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="w-1/2 p-4 sticky top-0 flex max-h-screen w-1/2 flex-col justify-between py-24">
            <div className="text-slate-200">
                <p className="text-5xl font-bold tracking-tight">Andrew Lin</p>
                <p className="mt-6 text-xl font-medium tracking-tight text-violet-300">Computer Science @ University of Waterloo</p>
                <nav>
                    <ul className="flex-col space-y-5 text-slate-400 mt-16 py-5 font-medium text-sm uppercase tracking-widest">
                        <li className={`${activeSection === 'about' ? 'text-violet-300' : ''}`}>
                            <a href="#about">About</a>
                        </li>
                        <li className={`${activeSection === 'experience' ? 'text-violet-300' : ''}`}>
                            <a href="#experience">Experience</a>
                        </li>
                        <li className={`${activeSection === 'education' ? 'text-violet-300' : ''}`}>
                            <a href="#education">Education</a>
                        </li>
                        <li className={`${activeSection === 'projects' ? 'text-violet-300' : ''}`}>
                            <a href="#projects">Projects</a>
                        </li>
                    </ul>
                </nav>
            </div>
            
            <div className="flex mt-8">
                <a className="text-3xl hover:text-violet-300" href="https://github.com/andrew-33">
                    <FaGithub />
                </a>
                <div className="mx-3"></div>
                <a className="text-3xl hover:text-violet-300" href="https://www.linkedin.com/in/andrewlin2/">
                    <FaLinkedin />
                </a>
            </div>
        </header>
    );
}
