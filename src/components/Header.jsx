import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Header() {
    return (
        <header className="w-1/2 p-4 sticky top-0 flex max-h-screen w-1/2 flex-col justify-between py-24">
            <div className="text-slate-200">
                <p className="text-6xl font-bold">Andrew Lin</p>
                <br/>
                <p className="text-lg font-semibold">Computer Science Student @ University of Waterloo</p>
            </div>
            <div className="flex">
                <a className="text-3xl hover:text-slate-200" href={"https://github.com/andrew-33"}>
                    <FaGithub />
                </a>
                <div className="mx-2"></div>
                <a className="text-3xl hover:text-slate-200" href={"https://www.linkedin.com/in/andrewlin2/"}>
                    <FaLinkedin />
                </a>
            </div>
        </header>
    );    
}