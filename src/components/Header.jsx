import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Header() {
    return (
        <header className="w-1/2 p-4 sticky top-0 flex max-h-screen w-1/2 flex-col justify-between py-24">
            <div className="text-slate-200">
                <p className="text-5xl font-bold tracking-tight">Andrew Lin</p>

                <p className="mt-6 text-xl font-medium tracking-tight">Computer Science Student @ University of Waterloo</p>
            </div>
            <div className="flex">
                <a className="text-3xl hover:text-slate-200" href={"https://github.com/andrew-33"}>
                    <FaGithub />
                </a>
                <div className="mx-3"></div>
                <a className="text-3xl hover:text-slate-200" href={"https://www.linkedin.com/in/andrewlin2/"}>
                    <FaLinkedin />
                </a>
            </div>
        </header>
    );    
}