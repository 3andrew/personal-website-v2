import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from 'react';

export function Header() {
    const [activeSection, setActiveSection] = useState('');

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
    
        let currentSection = 'about';

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
                <p className="mt-6 text-xl font-medium tracking-tight">Computer Science @ University of Waterloo</p>
            </div>
            {/* <nav>
                <ul className="flex space-x-8 text-slate-400">
                    <li className={`${activeSection === 'about' ? 'text-teal-300' : ''}`}>
                        <a href="#about">About</a>
                    </li>
                    <li className={`${activeSection === 'experience' ? 'text-teal-300' : ''}`}>
                        <a href="#experience">Experience</a>
                    </li>
                    <li className={`${activeSection === 'projects' ? 'text-teal-300' : ''}`}>
                        <a href="#projects">Projects</a>
                    </li>
                </ul>
            </nav> */}
            <div className="flex mt-8">
                <a className="text-3xl hover:text-slate-200" href="https://github.com/andrew-33">
                    <FaGithub />
                </a>
                <div className="mx-3"></div>
                <a className="text-3xl hover:text-slate-200" href="https://www.linkedin.com/in/andrewlin2/">
                    <FaLinkedin />
                </a>
            </div>
        </header>
    );
}
